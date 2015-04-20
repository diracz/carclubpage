// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // autox page that will use the AutoXController
        .when('/autox', {
            templateUrl: 'views/autox.html',
            controller: 'AutoXController'
        })


        // autox page that will use the TrackController
        .when('/track', {
            templateUrl: 'views/track.html',
            controller: 'TrackController'
        })

        // offroad page that will use the OffRoadController
        .when('/offroad', {
            templateUrl: 'views/offroad.html',
            controller: 'OffRoadController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        });

    $locationProvider.html5Mode(true);

}]);