'use strict';

angular.module('generatorAngularApp', ['ngCookies', 'ngResource', 'ngSanitize', 'myTestApp']).config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'default/index.html',
        controller: 'MainCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});