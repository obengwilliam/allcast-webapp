'use strict';

angular.module( 'allcast.home', [
])

.config(['$stateProvider',function myAppConfig ( $stateProvider) {

        $stateProvider
            .state('shame', {
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

.controller( 'HomeCtrl', [function HomeController() {

}]);
