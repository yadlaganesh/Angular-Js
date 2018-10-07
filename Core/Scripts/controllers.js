var guestControllers = angular.module('guestControllers',[]);

guestControllers.controller('GuestListController',function($scope,$http){
	var promise = $http.get("data/guests.json");
	
	var onSuccess = function(response){
		$scope.guests = response.data;
	};
	
	var onError = function(statusText){
		$scope.error = "Program Works well with Mozilla firefox & Safari.To make it work with chrome browser, run chrome.exe with following command from run window(Win+R key). chrome.exe -allow-file-access-from-files -disable-web-security";
	};
	
	promise.then(onSuccess,onError);
	$scope.sortColumn = "guestId"; // we can -guestId for descending and +guestId for ascending Order
});

guestControllers.controller('GuestDetailsController',function($scope,$http,$routeParams){
	var promise = $http.get("data/guests.json");
	
	var onSuccess = function(response){
		$scope.guests = response.data;
		$scope.id = $routeParams.id;
		
		if($routeParams.id > 0) 
			$scope.previous = Number($routeParams.id) - 1;
		else
			$scope.previous = $scope.guests.length - 1;
			
		if($routeParams.id < $scope.guests.length - 1) 
			$scope.next = Number($routeParams.id) + 1;
		else
			$scope.next = 0;
		
	};
	
	var onError = function(statusText){
		$scope.error = "Program Works well with Mozilla firefox & Safari.To make it work with chrome browser, run chrome.exe with following command from run window(Win+R key). chrome.exe -allow-file-access-from-files -disable-web-security";
	};
	
	promise.then(onSuccess,onError);
	$scope.sortColumn = "guestId"; // -guestId for descending Order
 

});


