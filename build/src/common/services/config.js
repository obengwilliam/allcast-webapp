'use strict';
angular
    .module('services.config', [])
    .factory('Config',['$window',function($window){
        var service = {};
        service.authToken= $window.localStorage.token;
        return service;
    }]);