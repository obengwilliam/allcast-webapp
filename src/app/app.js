'use strict';

angular.module( 'allcast', [
    'ui.router',
    'allcast.config',
    'templates-app',
    'templates-common',
    'allcast.home',
    'allcast.about',
    'allcast.broadcast',
    'allcast.listen',
    'security'
])



.config(['$stateProvider', '$urlRouterProvider',function myAppConfig ( $stateProvider,$urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl:'home/home.html',

                data:{
                pageTitle: 'Home',
                authenticate:false
                }
            });


        $urlRouterProvider.otherwise('/');

    }])

//TODO: move those messages to a separate module
.constant('MESSAGES', {
    'errors.route.changeError':'Route change error',

    'login.reason.notAuthorized':'You do not have the necessary access permissions.  Do you want to login as someone else?',
    'login.reason.notAuthenticated':'You must be logged in to access this part of the application.',
    'login.error.invalidCredentials': 'Login failed.  Please check your credentials and try again.',
    'login.error.serverError': 'There was a problem with authenticating'
})

.run(['$rootScope','$state','$stateParams', 'Security',function run ($rootScope,$state,$stateParams,Security) {
    $rootScope.$state=$state;
    $rootScope.$stateParams = $stateParams;
    Security.requestCurrentUser();

    $rootScope.$on('$stateChangeStart',
        function(event,toState){
            var isAuthenticated= toState.data.authenticate && !Security.isAuthenticated();
            console.log(isAuthenticated);

            if(isAuthenticated){
                event.preventDefault();
                $state.go('login', {notify:false});
            }

    });

}])
.factory('API_SERVER',['ENV',function(ENV){

        return ENV.API_SERVER;
    }])
.controller( 'allcastCtrl', ['$scope', function AppCtrl ( $scope) {

    $scope.$on('$stateChangeSuccess', function(event, toState){
        if ( angular.isDefined(toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | flowcast' ;
        }
    });
}]);