'use strict';

angular.module('security.interceptor',[])
.factory('securityInterceptor', function ($q, $window) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.localStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
            }
            return config;
        },

        responseError: function (response) {
            if (response.status === 401) {
                $window.localStorage.removeItem('token');
                $window.localStorage.removeItem('username');
                return;
            }
            return $q.reject(response);
        }
    };
})

.config(function($httpProvider) {
    $httpProvider.interceptors.push('securityInterceptor');
});