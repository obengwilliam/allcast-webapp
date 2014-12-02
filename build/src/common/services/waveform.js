

'use strict';
angular
    .module('services.waveform', [])
    .factory('Waveform',[function(){
        var service = {};

        service.init=function(stream){

            var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            var source;


            // grab the mute button to use below


            //set up the different audio nodes we will use for the app

            var analyser = audioCtx.createAnalyser();
            analyser.minDecibels = -90;
            analyser.maxDecibels = -10;
            analyser.smoothingTimeConstant = 0.85;

            var distortion = audioCtx.createWaveShaper();
            var gainNode = audioCtx.createGain();
            var biquadFilter = audioCtx.createBiquadFilter();
            var convolver = audioCtx.createConvolver();

            // distortion curve for the waveshaper, thanks to Kevin Ennis
            // http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion



            // grab audio track via XHR for convolver node



            var canvas = document.getElementById('visualizer');
            var canvasCtx = canvas.getContext('2d');
            console.log(canvas, '[kdkdkkdkk');

            var intendedWidth = 200;

            canvas.setAttribute('width',intendedWidth);


            var drawVisual;


            //main block for doing the audio recording

            function visualize() {

                window.WIDTH = canvas.width;
                window.HEIGHT = canvas.height;


                var visualSetting = 'sinewave';

                function draw() {
                    drawVisual = window.requestAnimationFrame(draw);

                    analyser.getFloatFrequencyData(dataArray);

                    canvasCtx.fillStyle = '#111214';
                    canvasCtx.fillRect(0, 0, window.WIDTH, window.HEIGHT);

                    var barWidth = (window.WIDTH / bufferLength) * 2.5;
                    var barHeight;
                    var x = 0;

                    for(var i = 0; i < bufferLength; i++) {
                        barHeight = (dataArray[i] + 85)*2;

                        canvasCtx.fillStyle = '#00ACED';
                        canvasCtx.fillRect(x,window.HEIGHT-barHeight/2,barWidth,barHeight/2);

                        x += barWidth + 1;
                    }
                }


                if(visualSetting === 'sinewave') {
                    analyser.fftSize = 1024;
                    var bufferLength = analyser.fftSize;
                    console.log(bufferLength);
                    var dataArray = new Float32Array(bufferLength);
                    draw();

                }

            }





            (function(stream){
                source = audioCtx.createMediaStreamSource(stream);
                source.connect(analyser);
                analyser.connect(distortion);
                distortion.connect(biquadFilter);
                biquadFilter.connect(convolver);
                convolver.connect(gainNode);
                gainNode.connect(audioCtx.destination);

                visualize();
            })(stream);


                // event listeners to change visualize and voice settings







        };

        return service;
    }]);


