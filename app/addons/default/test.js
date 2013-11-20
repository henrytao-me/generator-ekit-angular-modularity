'use strict';

angular.module('myTestApp', []).controller('TestCtrl', function($scope) {
	$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
}).factory('testService', function() {
	var res = {
		hello: 'moto'
	};
	return res;
});;