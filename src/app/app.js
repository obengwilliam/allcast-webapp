'use strict';

angular.module( 'allcast', [
    'ui.router',
    'btford.socket-io',
    'allcast.config',
    'services.broadcastwebrtc',
    'services.listenwebrtc',
    'services.waveform',
    'allcast.home',
    'allcast.about',
    'allcast.broadcast',
    'allcast.listen',
    'allcast.details',
    'security',
    'templates-app',
    'templates-common'
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


    // $rootScope.$on('$stateChangeSuccess',
    //     function(event,toState){
    //         var isAuthenticated= toState.data.authenticate && !Security.isAuthenticated();

    //         if(isAuthenticated){
    //             event.preventDefault();
    //             $state.go('login');

    //         }

    //     });

}])
.factory('API_SERVER',['ENV',function(ENV){

        return ENV.API_SERVER;
    }])
.factory('socket',['socketFactory','ENV', function (socketFactory,ENV) {
    var myIoSocket=window.io(ENV.SOCKET_SERVER);
    console.log(ENV.SOCKET_SERVER);
    var service =socketFactory({ioSocket:myIoSocket});
    return service;
}])
.controller( 'allcastCtrl', ['$scope', function AppCtrl ( $scope) {

    $scope.$on('$stateChangeSuccess', function(event, toState){
        if ( angular.isDefined(toState.data.pageTitle ) ) {
            $scope.pageTitle ='Appcast| '+ toState.data.pageTitle ;

        }
    });
}]);