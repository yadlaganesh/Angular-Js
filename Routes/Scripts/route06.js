var app = angular.module('routeApp',['ngRoute']);

app.run(function($rootScope){
	$rootScope.$on("$routeChangeStart",function(event,current,next){
		console.log("RouteChangeStart Event : ",event,current,next);
	});
	
	$rootScope.$on("$routeChangeSucess",function(event,current,next){
		console.log("RouteChangeSucess Event : ",event,current,next);
	});
});

app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl:'partials/First.html',
			controller:'FirstController',
			
		})
		.when('/two',
		{
			templateUrl:'partials/Second.html',
			controller:'SecondController',
			resolve:{
				loadData : firstCntrl.loadData 
			}
		})
});


app.controller("MainController",function($scope,$rootScope,$route,$location){
	/*$rootScope.$on("$routeChangeStart",function(event,current,next){
		console.log("RouteChangeStart Event : ",event,current,next);
	});
	$rootScope.$on("$routeChangeSucess",function(event,current,next){
		console.log("RouteChangeSuccess Event : ",$scope,$rootScope,$route,$location);
	});*/
});

var firstCntrl = app.controller("FirstController",function($scope,$location){
	$scope.changeRoute = function(){
		$location.path('/two');
	}

});

firstCntrl.loadData = function($q,$timeout){
	var defer = $q.defer();
	$timeout(function(){
		defer.resolve({message:"success"});
	},2000);
	return defer.promise;
}

app.controller("SecondController",function($scope,$rootScope,loadData){
	console.log("Second Controller : ",$scope,loadData);
});



