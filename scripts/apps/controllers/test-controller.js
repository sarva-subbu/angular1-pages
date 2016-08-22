var app = angular.module('ang-test',[]);

app.controller('TestController', ['$scope', 'TestService', function($scope, TestService) {
	$scope.name = TestService.name;
}]);