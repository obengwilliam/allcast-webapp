'use strict';


angular.module('register.local',[])
.config(['$stateProvider' ,function($stateProvider){
    $stateProvider
    .state('register',{
        url:'/register',
        views:{
            '':{
                controller:'localRegistrationCtrl',
                templateUrl:'security/register/register.html'

            }
        },
        data:{ pageTitle: 'register' }

    });



}])


.controller('localRegistrationCtrl',
    ['$scope','ENV','Security','$location','$rootScope','$state', function($scope,ENV,Security,$location,$rootScope,$state)
{
    $scope.signUp=function(credentials){

        Security.destroy();
        Security.signUp(credentials).then(
            function(){



                    $rootScope.user=Security.currentUser;
                    $rootScope.isAuthenticated=Security.isAuthenticated;
                    $rootScope.isAuthorized=Security.isAuthorized;
                    if ($rootScope.fromState.fromState.url.indexOf('thumbnails') > -1){
                        $state.go('dashboard.nearby.thumbnail',{thumbnailId: $rootScope.fromState.fromParams.thumbnailId});
                    }
                    else{
                        $state.go('dashboard.nearby');
                    }

                }, function(error){
                    $scope.authError=error.message;

                });

    };

}]);
