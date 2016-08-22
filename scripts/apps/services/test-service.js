var app = angular.module('ang-test');

app.service('TestService', [function() {
	this.name = "Test Name from service";
	this.getName = function() {
		return "hello from service...."
	};
}]);