'use strict';

angular.module('security',
    [
    'security.login',
    'security.register',
    'security.interceptor',
])
.factory('Security',['$http','API_SERVER','$q','$window','$rootScope','$timeout', '$state',
 function($http,API_SERVER,$q,$window,$rootScope,$timeout,$state){


    //redirect
    function redirect(url) {
        url = url || 'login';
        $state.go('login');
    }

    // service begins
    var service= {
        currentUser:undefined,

        destroy:function()
        {
            service.currentUser=undefined;
            $window.localStorage.clear();
            $rootScope.user=null;
        },

        login: function(credentials){

            var defer= $q.defer();
            $http.post(API_SERVER +'accounts/login', credentials).then(
                function(response){

                    service.currentUser={
                        email: response.data.email,
                        firstname: response.data.firstname,
                        lastname: response.data.lastname,
                        username: response.data.username,
                        token: response.data.token
                    };


                    if(service.currentUser.token && service.currentUser.username)
                    {
                        $window.localStorage.token=service.currentUser.token;
                        $window.localStorage.username=service.currentUser.username;

                    }
                    defer.resolve(service.isAuthenticated());
                },function(error){
                    defer.reject(error.data);

                });

            return defer.promise;

        },

        signUp:function(credentials)
        {

            var defer= $q.defer();
            $http.post(API_SERVER +'accounts', credentials).then(
                function(response){

                    service.currentUser={
                        email: response.data.email,
                        firstname: response.data.firstname,
                        lastname: response.data.lastname,
                        username: response.data.username,
                        token: response.data.token
                    };


                    if(service.currentUser.token && service.currentUser.username)
                    {
                        $window.localStorage.token=service.currentUser.token;
                        $window.localStorage.username=service.currentUser.username;

                    }
                    defer.resolve(service.isAuthenticated());
                },function(error){
                    defer.reject(error.data);

                });

            return defer.promise;

        },

        requestCurrentUser: function() {
            if ($window.localStorage.token) {
                var defer=$q.defer();

                $http.get(API_SERVER+'accounts/me')
                .then(function(response) {
                    service.currentUser = {
                        email: response.data.email,
                        firstname: response.data.firstname,
                        lastname: response.data.lastname,
                        username: response.data.username,
                        token: response.data.token,
                    };
                    defer.resolve(service.currentUser);
                },function(err){
                    console.log(err);
                });


                return defer.promise;
            }
        },

        isAuthenticated:function(){
            return !!service.currentUser;
        },

        isAuthorized:function(authorizedRoles){
            if(!!angular.isArray(authorizedRoles)){
                authorizedRoles=[authorizedRoles];
            }
            return (service.isAuthenticated()) && (authorizedRoles.indexOf(service.currentUser.userRole)!== -1);

        },
        logout: function() {
                    service.destroy();
                    redirect();
                }

    };


    return service;
}]);