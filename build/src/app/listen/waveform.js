// var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// var source;


// // grab the mute button to use below


// //set up the different audio nodes we will use for the app

// var analyser = audioCtx.createAnalyser();
// analyser.minDecibels = -90;
// analyser.maxDecibels = -10;
// analyser.smoothingTimeConstant = 0.85;

// var distortion = audioCtx.createWaveShaper();
// var gainNode = audioCtx.createGain();
// var biquadFilter = audioCtx.createBiquadFilter();
// var convolver = audioCtx.createConvolver();

// // distortion curve for the waveshaper, thanks to Kevin Ennis
// // http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion



// // grab audio track via XHR for convolver node


// window.$('document').ready(function(){

//     var canvas = document.getElementsByTagName('canvas')[0];
//     var canvasCtx = canvas.getContext('2d');

//     var intendedWidth = 200;

//     canvas.setAttribute('width',intendedWidth);


//     var drawVisual;


//     //main block for doing the audio recording

//     function visualize() {


//         window.WIDTH = canvas.width;
//         window.HEIGHT = canvas.height;


//         var visualSetting = 'sinewave';


//         if(visualSetting === 'sinewave') {
//            analyser.fftSize = 1024;
//            var bufferLength = analyser.fftSize;
//            console.log(bufferLength);
//            var dataArray = new Float32Array(bufferLength);

//             function draw() {
//               drawVisual = requestAnimationFrame(draw);

//               analyser.getFloatFrequencyData(dataArray);

//               canvasCtx.fillStyle = '#111214';
//               canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

//               var barWidth = (WIDTH / bufferLength) * 2.5;
//               var barHeight;
//               var x = 0;

//               for(var i = 0; i < bufferLength; i++) {
//                 barHeight = (dataArray[i] + 70);

//                 canvasCtx.fillStyle = '#00ACED';
//                 canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);

//                 x += barWidth + 1;
//               }
//             }


//             draw();

//         }

//     }


//     if(navigator.webkitGetUserMedia){
//         navigator.webkitGetUserMedia ({audio:true}, function(stream){

//             source = audioCtx.createMediaStreamSource(stream);
//             source.connect(analyser);
//             analyser.connect(distortion);
//             distortion.connect(biquadFilter);
//             biquadFilter.connect(convolver);
//             convolver.connect(gainNode);
//             gainNode.connect(audioCtx.destination);

//             visualize();
//         },function(err){
//             console.log(err);
//         });
//     }else {
//         console.log('no user media');
//     }




//     // event listeners to change visualize and voice settings


// });



