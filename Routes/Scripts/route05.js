var app = angular.module('routeApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		//?country=India&state=Karnataka#Bangalore
		.when('/one',
		{
			templateUrl:'partials/One.html',
			controller:'RouteController',
			
		})
		.when('/two',
		{
			templateUrl:'partials/Two.html',
			controller:'RouteController',
			
		})
		.when('/three',
		{
			templateUrl:'partials/Three.html',
			controller:'RouteController',
			
		})
		
});

app.controller("MainController",function($scope,$location){
	
	$scope.LoadPage = function(page){
		$location.replace(); //Clears the history 
		$location.url("/"+page);
	}
});

app.controller("RouteController",function($scope,$location){
	console.log($location);
	$scope.absUrl = $location.absUrl();
	$scope.protocol = $location.protocol();
	$scope.port = $location.port();
	$scope.host = $location.host();
	$scope.path = $location.path();
	$scope.search = $location.search();
	$scope.hash = $location.hash();
	$scope.url = $location.url();
	
});



