var app = angular.module('routeApp',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('country',{
			url:'/',
			template:'<h1>Country : India</h1>'
		})
		.state('state',{
			url:'/state',
			template:'<h1>State : Karnataka</h1>'
		})
		.state('city',{
			url:'/state/city',
			template:'<h1>City : Bangalore</h1>'
		})
		$urlRouterProvider.otherwise('/');
		
});

