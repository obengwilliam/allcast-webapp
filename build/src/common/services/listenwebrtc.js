'use strict';
angular
    .module('services.listenwebrtc', [])
    .factory('ListenWebrtc',['Waveform', function(Waveform){
        var service = {};
        service.init=function(socket){



                window.onbeforeunload = function(){
                    hangup();
                };

                // Data channel information

                // HTML5 <video> elements
                var remoteVideo = document.querySelector('#listen_audio');

                // Flags...
                var isJoined=false;
                var isChannelReady = false;
                var isInitiator = false;
                var isStarted = false;
                var endofCandidates = false;

                // WebRTC data structures
                // Streams
                var remoteStream;
                var pc;

                // PeerCon

                // PeerConnection ICE protocol configuration (either Firefox or Chrome)
                var pc_config = window.webrtcDetectedBrowser === 'firefox' ?
                 {'iceServers':[{'url':'stun:23.21.150.121'}]} : // IP addres
                 {'iceServers': [{'url': 'stun:stun.l.google.com:19302'}]};

                var pc_constraints = {
                    'optional': [{'DtlsSrtpKeyAgreement': true}
               ]};

                var sdpConstraints = {};


                // Let's get started: prompt user for input (room name)
                var room = window.prompt('Enter room name:');

                // Connect to signaling server
                // Clean-up functions...


               // Send 'Create or join' message to singnaling server
                if (room !== '') {
                    console.log('create or join room', room);
                    socket.emit('create or join', room);
                }






                socket.on('room exist', function (room){
                        console.log('You cannot create room:room already exist' + room);

                    });


                // Handle 'join' message coming back from server:
                // another peer is joining the channel

                socket.on('join', function (room){
                    console.log('Another peer made a request to join room ' + room);
                    console.log('This peer jux joined' + room + '!');
                    isChannelReady = true;
                });

                // Handle 'full' message coming back from server:
                // this peer arrived too late :-(

                socket.on('full', function (room){
                    console.log('Room ' + room + ' is full');
                });

                // Handle 'joined' message coming back from server:
                // this is the second peer joining the channel
                socket.on('joined', function (room){
                    console.log('This peer has joined room ' + room);
                    isChannelReady = true;
                    isJoined=true;
                    // Call getUserMedia()
                    //navigator.getUserMedia(constraints, handleUserMedia, handleUserMediaError);
                    console.log('Jus joined');
                    socket.emit('start listening','got user media');

                });




                // Server-sent log message...
                socket.on('log', function (array){
                    console.log.apply(console, array);
                });


                // Receive message from the other peer via the signaling server
                socket.on('message', function (message){
                    if (message === 'got user media') {
                        checkAndStart();
                    } else if (message.type === 'offer') {
                        if (!isInitiator && !isStarted) {
                            console.log('0000000000000000000000000000000000000000',isInitiator,isStarted);
                            checkAndStart();
                        }

                        pc.setRemoteDescription(new window.RTCSessionDescription(message));
                        doAnswer();
                    } else if (message.type === 'answer' && isStarted) {
                        pc.setRemoteDescription(new window.RTCSessionDescription(message));
                    } else if (message.type === 'candidate' && isStarted) {
                        var candidate = new window.RTCIceCandidate({sdpMLineIndex:message.label, candidate:message.candidate});
                        pc.addIceCandidate(candidate);
                    } else if (message === 'bye' && isStarted) {
                        handleRemoteHangup();
                    }
                });


                function hangup() {
                    console.log('Hanging up.');
                    stop();
                    sendMessage('bye');
                }

                // From this point on, execution proceeds based on asynchronous events...
                // getUserMedia() handlers...

                // Channel negotiation trigger function
                function checkAndStart() {
                    //joined
                    if(!isStarted && isJoined && isChannelReady){
                        createPeerConnection();
                        isStarted = true;
                    }
                }

                // Send message to the other peer via the signaling server
                function sendMessage(message){
                    if(!endofCandidates){
                        console.log('Sending message: ', message);
                        socket.emit('message', message);

                    }


                }



                // PeerConnection management...
                function createPeerConnection() {

                    try {
                        pc = new window.RTCPeerConnection(pc_config, pc_constraints);
                        if (isJoined){
                            console.log(pc);
                        }



                        pc.onicecandidate = handleIceCandidate;
                        console.log('Created RTCPeerConnnection with:\n' +
                        ' config: \'' + JSON.stringify(pc_config) + '\';\n' +
                        ' constraints: \'' + JSON.stringify(pc_constraints) + '\'.');


                    } catch (e) {

                        console.log('Failed to create PeerConnection, exception: ' + e.message);
                        window.alert('Cannot create RTCPeerConnection object.');
                        return;
                    }

                    pc.onaddstream = handleRemoteStreamAdded;
                    pc.onremovestream = handleRemoteStreamRemoved;


                }


                // Signaling error handler
                function onSignalingError(error) {
                    console.log('Failed to create signaling message : ' + error.name);
                }
                // Create Answer
                function doAnswer() {
                    console.log('Sending answer to peer.');
                    pc.createAnswer(setLocalAndSendMessage, onSignalingError, sdpConstraints);
                }
                    // Success handler for both createOffer()
                // and createAnswer()
                function setLocalAndSendMessage(sessionDescription) {
                    pc.setLocalDescription(sessionDescription);
                    sendMessage(sessionDescription);
                }

                function handleRemoteStreamAdded(event) {
                    console.log('Remote stream added.');
                    window.attachMediaStream(remoteVideo, event.stream);
                    console.log('Remote stream attached!!.');
                    remoteStream = event.stream;
                    console.log(remoteStream, 'kkkkkkk');
                    Waveform.init(remoteStream);

                }

                function handleRemoteStreamRemoved(event) {
                    console.log('Remote stream removed. Event: ', event);
                }


                function handleRemoteHangup() {
                    console.log('Session terminated.');
                    stop();
                    isInitiator = false;
                }


                function stop() {
                    isStarted = false;
                    if (pc) {
                        pc.close();
                    }
                    pc = null;
                }

            // ICE candidates management
                function handleIceCandidate(event) {
                    console.log('handleIceCandidate event: ', event);
                    if (event.candidate) {
                        sendMessage({
                            type: 'candidate',
                            label: event.candidate.sdpMLineIndex,
                            id: event.candidate.sdpMid,
                            candidate: event.candidate.candidate
                        });

                    } else {
                        if(isJoined){
                            endofCandidates=true;
                        }
                        console.log('End of candidates.');
                    }
                }

            };
        return service;
    }]);