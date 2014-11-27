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
.controller('detailsCtrl', ['$scope','Broadcast', function($scope,Broadcast){

    $scope.broadcastDetails=function(details){
        Broadcast.post(details)
        .then(function(currentBroadcast){
            $scope.currentBroadcast=currentBroadcast;

        },function(error){
            // $scope.broadcasterror=error.detail;
            console.log(error);
        });
    };

}])
.factory('Broadcast', ['API_SERVER', '$q','$http', function(API_SERVER,$q, $http){

    var service = {
        currentBroadcast:undefined,

        post:function(details){
            var defer = $q.defer();
            $http.post(API_SERVER +'broadcast', details)
            .success(function(response){
                service.currentBroadcast={
                    broadcastName:response.data.broadcastname,
                    category:response.data.category
                };
                defer.resolve(service.currentBroadcast);
            })
            .error(function(error){
                defer.reject(error.data);
            });

            return defer.promise;
        }
    };
    return service;
}]);