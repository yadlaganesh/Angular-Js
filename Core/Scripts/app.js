var guestApp = angular.module('guestApp',[
	'ngRoute',
	'guestControllers'
]);

guestApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider.
	when("/guestDetails", {
			templateUrl: "partials/guests.html", 
			controller: "GuestListController"
	})
	.when("/guestDetails/:id", {
			templateUrl: "partials/guestDetails.html", 
			controller: "GuestDetailsController"
	})	
	.otherwise({
		redirectTo: '/guestDetails'
	})
}]);


