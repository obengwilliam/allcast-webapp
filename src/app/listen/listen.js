'use strict';



angular
.module('allcast.listen',[])

.config(['$stateProvider' ,function($stateProvider){
    $stateProvider
    .state('listen',{
        url:'/listen',
        views:{
            '':{
                controller:'listenCtrl',
                templateUrl:'listen/listen.html'

            }
        },
        data:{
            pageTitle: 'listen' ,
            authenticate:true

        }

    });



}])


.controller('listenCtrl', ['$scope','$timeout', 'Webrtc', 'socket', function($scope,$timeout,Webrtc,socket){

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

    var listen_audio=angular.element('#listen_audio')[0];

    var mute_element=angular.element('#mute');
    mute_element.click(function(event){
        event = event || window.event;
        listen_audio.muted = !listen_audio.muted;
        event.preventDefault();

    });

    window.volume=function(value){
        $timeout(function(){
            $scope.soundVolume=(value);

        });
        listen_audio.volume=(value/10);
    };

    window.seconds=function(){
        $timeout(function(){
            $scope.secs=(Math.floor(listen_audio.currentTime).toString()).toHHMMSS();
        });


    };

    Webrtc.init(socket);



}]);


