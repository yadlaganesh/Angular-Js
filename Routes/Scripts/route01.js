var app = angular.module('routeApp',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
	$routeProvider
		/* #/ */
		.when('/',                            
		{
			template:'<h1>Country : India</h1>'
		})
		/* #/state */
		.when('/state',						
		{
			template:'<h1>State : Karnataka</h1>'
		})
		/* #/state/city */
		.when('/state/city',
		{
			template:'<h1>City : Bangalore</h1>'
		})
		/* #/anything */
		.otherwise({
			redirectTo:'/state'
		});
		//$locationProvider.html5Mode(false);
		//$locationProvider.hashPrefix('!');
});

