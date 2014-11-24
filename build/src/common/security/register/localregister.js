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
        data:{
            pageTitle: 'register',
            authenticate:'true'

        }

    });



}])


.controller('localRegistrationCtrl',
    ['$scope','ENV','Security','$location','$rootScope','$state', function($scope,ENV,Security,$location,$rootScope,$state)
{
    $scope.signUp=function(credentials){

        Security.destroy();
        Security.signUp(credentials).then(
            function(isRegistered){
                if(isRegistered){
                     $state.go('broadcast');
                }
            },
            function(error){
                    console.log(error);
                    $scope.authError=error.detail;

        });

    };

}])
.directive('match', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        scope: {
            match: '='
        },
        link: function(scope, elem, attrs, ctrl) {
            scope.$watch(function() {
                var modelValue = ctrl.$modelValue || ctrl.$$invalidModelValue;
                return (ctrl.$pristine && angular.isUndefined(modelValue)) || scope.match === modelValue;
            }, function(currentValue) {
                ctrl.$setValidity('match', currentValue);
            });
        }
    };
});