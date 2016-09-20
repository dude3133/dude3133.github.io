(function () {
    'use strict';
    angular
        .module('App')
        .config(routesConfig);

    routesConfig.$inject = ['$routeProvider'];

    function routesConfig($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl: 'app/home/home.html',
                controller: 'homeController as home',
            })
            .when('/courses/:name*/:course',
            {
                templateUrl: function (urlattr) {
                    return 'app/courses/' + urlattr.name + '/' + urlattr.course + '.html';
                }
            })
            .when('/home',
            {
                templateUrl: 'app/home/home.html',
                controller: 'homeController as home',
            })
            .when('/about',
            {
                templateUrl: 'app/about/about.html'
            })
            .when('/contact',
            {
                templateUrl: 'app/contact/contact.html'
            })
            .otherwise({
                templateUrl: 'app/error/error.html'
            });
    }
})();