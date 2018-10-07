var app = angular.module('routeApp',['ngRoute']);

app.run(function($rootScope) {
  	$rootScope.pageLoaded=new Date();
});

app.config(function($routeProvider,$locationProvider){
	
	$routeProvider
		/* #/?state=TN&city=chennai */
		.when('/',
		{
			companyName:'IGATE',
			templateUrl:'partials/routeservice.html',
			controller:'RouteController'
		})
		/* #/1?city=chennai */
		.when('/:id',
		{
			companyName:'Microsoft',
			templateUrl:'partials/routeservice.html',
			controller:'RouteController'
		})
		.otherwise({
			redirectTo : "/"
		})
});

app.controller("RouteController",function($scope,$route){
	$scope.data={
					customProperty:$route.current.companyName,
					queryString: $route.current.params.city, 
					pathParams : $route.current.pathParams.id
				};

	$scope.loadedTime=new Date();

	$scope.reload=function(){
		$route.reload();
	};
});


