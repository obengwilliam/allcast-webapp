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
        data:{ pageTitle: 'broadcast' }

    });



}])


.controller('broadCastCtrl', [function(){


}]);