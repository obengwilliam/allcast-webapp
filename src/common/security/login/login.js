'use strict';



angular
.module('security.login',[])

.config(['$stateProvider' ,function($stateProvider){
    $stateProvider
    .state('login',{
        url:'/login',
        views:{
            '':{
                controller:'loginCtrl',
                templateUrl:'security/login/login.html'

            }
        },
        data:{
            pageTitle: 'Login',
            authenticate:false
        }

    });



}])


.controller('loginCtrl', ['$rootScope', '$scope', 'Security', '$state',
    function($rootScope,$scope,Security,$state){

    $scope.authError=null;

    $scope.signIn= function(credentials){
        Security.destroy();
        Security.login(credentials).then(
            function(isLoggedIn){
                if(isLoggedIn){
                    $rootScope.user=Security.currentUser;
                    $rootScope.isAuthenticated=Security.isAuthenticated;
                    $rootScope.isAuthorized=Security.isAuthorized;

                    $state.go('details');
                }
            },function (error){
            if(error){
                $scope.authError=error.detail;
            }

        });


    };

    $scope.clearForm = function() {
        $scope.credentials = {};
    };

    $scope.cancelLogin = function() {
        Security.cancelLogin();
    };

    $scope.logout=function()
    {
        Security.logout();
    };



}]);