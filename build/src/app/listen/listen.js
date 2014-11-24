'use strict';



angular
.module('allcast.listen',[])

.config(['$stateProvider' ,function($stateProvider){
    $stateProvider
    .state('listen',{
        url:'/listen',
        views:{
            '':{
                controller:'listenCtrl',
                templateUrl:'listen/listen.html'

            }
        },
        data:{
         pageTitle: 'listen' ,
         authenticate:true

        }

    });



}])


.controller('listenCtrl', [,
    function(){


}]);