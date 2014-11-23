'use strict';

angular.module( 'allcast.about', [])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'about', {
        url: '/about',
        views: {
            'main': {
                controller: 'AboutCtrl',
                templateUrl: 'about/about.tpl.html'
            }
        },
        data:{ pageTitle: 'What is It?' }
    });
})

.controller( 'AboutCtrl',[ function AboutCtrl() {

}]);