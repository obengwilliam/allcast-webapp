'use strict';



angular
.module('allcast.broadcast',[])

.config(['$stateProvider' ,function($stateProvider){
    $stateProvider
    .state('broadcast',{
        url:'/broadcast',
        views:{
            '':{
                controller:'broadCastCtrl',
                templateUrl:'broadcast/broadcast.html'

            }
        },
        data:{
            pageTitle: 'broadcast',
            authenticate:true

        }

    });



}])


.controller('broadCastCtrl', ['Webrtc', 'socket','$timeout','$scope',
 function(Webrtc,socket,$timeout,$scope){

    String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = '0'+hours;}
        if (minutes < 10) {minutes = '0'+minutes;}
        if (seconds < 10) {seconds = '0'+seconds;}
        var time    = hours+':'+minutes+':'+seconds;
        return time;
    };

    var audio_element=angular.element('#broadcast_audio');
    var broadcast_audio= audio_element[0];
    var volume_element=angular.element('#volume');
    window.volume = volume_element[0];
    // console.log(window.volume);


    angular.element('#mic-on').hide();
    angular.element('.live-button').hide();


    angular.element('.broadcast-button').click(function() {
        //show live-button and start timer
        angular.element('.live-button').show();
        angular.element(this).hide();
        angular.element('#mic').hide();
        angular.element('#mic-on').css('color','#D50000');
        angular.element('#mic-on').show();
        angular.element('.fa-circle').css('color','#D50000');
        angular.element('.air-display').text('LIVE');

    });

    angular.element('.live-button').click(function(){
        if(window.confirm('Are you sure you want to end your broadcast?')) {
            angular.element('.broadcast-button').show();
            angular.element(this).hide();
            angular.element('#mic').show();
            angular.element('#mic-on').hide();
            angular.element('.fa-circle').css('color','#E0E0E0');
            angular.element('.air-display').text('OFF-AIR');


        }

    });


    angular.element('#caster-wrapper').particleground({
        dotColor: '#2eceff',
        lineColor: '#2eceff',
        density: 7000
    });

    angular.element('.animate').css({
        'margin-top':-(angular.element('.animate').height() / 2)
    });

    angular.element('#channelInfo').modal({
        show: true
    });
    console.log(angular.element('#channelInfo'));

    // $(document).ready(function(){
    //     $("#channelInfo").show();
    // });
    
    // angular.element("#channelInfo").modal('show');
    // });

    volume_element.bind('change',function(){
        var value=volume_element.val();
        $timeout(function(){
            $scope.soundVolume=(value);

        });
        broadcast_audio.volume=(value/10);
    });

    audio_element.bind('timeupdate',function(){
        $timeout(function(){
            $scope.secs=(Math.floor(broadcast_audio.currentTime).toString()).toHHMMSS();
        });
    });

    Webrtc.init(socket);








}]);