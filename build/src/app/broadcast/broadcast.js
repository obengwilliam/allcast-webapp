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


.controller('broadCastCtrl', ['Webrtc', 'socket', function(Webrtc,socket){

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


    Webrtc.init(socket);







}]);