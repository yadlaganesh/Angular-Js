var app = angular.module('routeApp',['ngRoute','ngResource']);

app.factory("EmployeeService", function ($resource,$q,$timeout) {
    var resource = $resource('data/employees/:id.json', { id: '@id' });
	return{
		getEmployee:function(employeeId){
			var deferred = $q.defer();
			resource.get({id:employeeId},
				function(employee){
					$timeout(function(){
						deferred.resolve(employee);
					}, 3000);
				},
				function(response){
					$timeout(function(){
						deferred.reject(response);
					}, 3000);
				});
			return deferred.promise;
		}
	}
});

app.config(function($routeProvider,$locationProvider){
	$routeProvider
		.when('/',
		{
			template:'<h1>Type the EmployeeId(101 or 102) in the url after # like #/101 to route</h1>'
		})
		.when('/:id',
		{
			templateUrl:'partials/showEmployee.html',
			controller:'RouteController',
			/*uncomment to use resolve in routing*/
			/*
			resolve : {
				//here employee is a resolve property
				employee:function($q,$route,EmployeeService){
					var deferred = $q.defer();
					EmployeeService.getEmployee($route.current.pathParams.id).then(
						function(employee){
							deferred.resolve(employee);
						},
						function(response){
							deferred.reject(response);
						}
					);
					return deferred.promise;
				}
			}*/
		})
		.otherwise({
			redirectTo : "/"
		})
});

app.controller("MainController",function($scope){
	$scope.loading = false;
});

/* controller fetches the data*/

app.controller("RouteController",function($scope,EmployeeService,$route){
	$scope.$parent.loading = true;
	var promise = EmployeeService.getEmployee($route.current.pathParams.id);
	promise.then(
		function(employee){
			$scope.$parent.loading = false;
			$scope.employee = employee;
		},
		function(response){
			$scope.$parent.loading = false;
			console.log(response);
		}
	);
});


/*uncomment to use resolve in routing - data is given to the controller */
/*
app.controller("RouteController",function($scope,$route,employee){
	$scope.employee = employee;
	//Another way to access the resolve property using route service
	//$scope.employee = $route.current.locals.employee; 
});
*/

