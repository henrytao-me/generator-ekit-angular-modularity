'use strict';

angular.module('generatorAngularApp').controller('MainCtrl', function($scope, testService) {
	$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
	console.log(testService);
});