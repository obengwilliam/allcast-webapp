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
        data:{
            pageTitle: 'Login',
            authenticate:false
         }

    });



}])


.controller('loginFormCtrl', ['$rootScope', '$scope', 'Security', '$state',
    function($rootScope,$scope,Security,$state){

    $scope.authError=null;

    $scope.signIn= function(credentials){
        Security.destroy();
        Security.login(credentials).then(
            function(isLoggedIn){
                console.log(isLoggedIn);
                if(isLoggedIn){
                    $state.go('broadcast');
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