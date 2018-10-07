var app = angular.module('routeApp',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home',{
			url:'/',
			templateUrl:'partials/map.html',
			controller: function($scope) {
				$scope.model = "Associating with the template as the controller for the DOM element.";
			}
		})
		.state('country',{
			url:'/{country}/{state}/{city}',
			templateUrl:'partials/map.html',
			controller:'RouteController'
		})
		.state('test',{
			url:'/test/:message',
			redirectTo:function(stateParams,path,search){
				console.log(stateParams);
				console.log(path);
				console.log(search);
				return "/"+stateParams.message;
			}
		})
		.state('company',{
			url:'/igate',
			template : "<h1>IGATE</h1>"
		})
		$urlRouterProvider.otherwise('/');
		
});


app.controller("RouteController",function($scope,$stateParams){
	$scope.model = $stateParams.country+" - "+$stateParams.state+" - "+$stateParams.city;
});

