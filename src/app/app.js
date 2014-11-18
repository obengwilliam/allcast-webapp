'use strict';

angular.module( 'allcast', [
    'ui.router',
    'templates-app',
    'templates-common',
    'flowcast.home',
    'flowcast.about',
])



.config(['$stateProvider', '$urlRouterProvider',function myAppConfig ( $stateProvider,$urlRouterProvider) {
        $urlRouterProvider
        .otherwise('/login');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'main':{
                        templateUrl:'home/main.html'
                    },
                    'footer': {
                        templateUrl: 'home/footer.html'
                    },
                    'features': {
                        templateUrl: 'home/features.html'
                    },
                    'team': {
                        templateUrl: 'home/team.html'
                    },

                    'prefooter': {
                        templateUrl: 'home/prefooter.html'
                    }
                },

                data:{ pageTitle: 'Home' }
            });



    }])

.run(['$rootScope','$state','$stateParams',function run ($rootScope,$state,$stateParams) {
    $rootScope.$state=$state;
    $rootScope.$stateParams = $stateParams;

}])
.controller( 'allcastCtrl', ['$scope', function AppCtrl ( $scope) {

    $scope.$on('$stateChangeSuccess', function(event, toState){
        if ( angular.isDefined(toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | flowcast' ;
        }
    });
}]);