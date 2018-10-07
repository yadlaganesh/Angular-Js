var app = angular.module('routeApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			/*
				If the templateUrl property is set, then app will attempt to fetch the view using XHR 
				(utilizing the $templateCache). If it finds the template and can load it, Angular 
				will render the template’s contents in the ng-view DOM element.
			*/
			templateUrl:'partials/map.html',
			controller: function($scope) {
				$scope.model = "Associating with the template as the controller for the DOM element.";
			}
		})
		/* #/India/Karnataka/Bangalore */
		.when('/:country/:state/:city',
		{
			templateUrl:'partials/map.html',
			controller:'RouteController' //associates the controller on the module with the new route
		})
		/*
			#/test/itops
			#/test/igate
			#/test/igate?cty=Chennai&st=TN
		*/
		.when('/test/:message',
		{
			redirectTo:function(routeParams,path,search){
				console.log(routeParams);
				console.log(path);
				console.log(search);
				return "/"+routeParams.message;
			}
		})
		.when('/igate',
		{
			template : "<h1>IGATE</h1>"
		})
});

app.controller("RouteController",function($scope,$routeParams){
	$scope.model = $routeParams.country+" - "+$routeParams.state+" - "+$routeParams.city;
});


