'use strict';
angular
.module('allcast.details',['ui.router'])

.config(['$stateProvider' ,function($stateProvider){
    $stateProvider
    .state('details',{
        url:'/details',
        views:{
            '':{
                controller:'detailsCtrl',
                templateUrl:'details/details.html'

            }
        },
        data:{
            pageTitle: 'Details',
            authenticate:true

        }

    })
     .state('details.broadcast',{
        url:'/broadcast',
        views:{
            '@':{
                controller:'detailsCtrl',
                templateUrl:'details/detailsbroadcast.html'
            }
        },
        data:{
            pageTitle: 'Broadcast Details',
            authenticate:true

        }

    });



}])


.controller('detailsCtrl', [function(){


}]);