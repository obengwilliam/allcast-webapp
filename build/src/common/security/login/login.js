'use strict';



angular
.module('security.login',[])

.config(['$stateProvider' ,function($stateProvider){
    $stateProvider
    .state('login',{
        url:'/login',
        views:{
            '':{
                controller:'loginFormCtrl',
                templateUrl:'security/login/login.html'

            }
        },
        data:{ pageTitle: 'Login' }

    });



}])


.controller('loginFormCtrl', ['$rootScope', '$scope', 'Security', '$state',
    function($rootScope,$scope,Security){

    $scope.authError=null;

    $scope.signIn= function(credentials){
        Security.destroy();
        Security.login(credentials).then(function(){
                $rootScope.user=Security.currentUser;
                $rootScope.isAuthenticated=Security.isAuthenticated;
                $rootScope.isAuthorized=Security.isAuthorized;




            },function (error){
            if(error){
                $scope.authError=error.message;
            }

        });

        // $scope.showMenu();

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