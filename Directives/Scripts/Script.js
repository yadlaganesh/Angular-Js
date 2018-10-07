var directiveNameSpace = angular.module('directivesApp',['ngSanitize']); 

directiveNameSpace.run(function($rootScope) {
	$rootScope.someProperty = "You are creating property on global Scope";
});

directiveNameSpace.controller('DirectivesController',function($scope,$sce){
	$scope.companyName = "IGATE";
	$scope.unsafeContent = "<span style='color:red'>Content won't appear in red</span>";
	$scope.safeContent = $sce.trustAsHtml("<span style='color:red'>Content should appear in red</span>");
	$scope.flag = true;
	$scope.customStyle = {'color':'yellow','background-color':'black','font-family':'candara'};
	$scope.cssClass = "customClass";
	$scope.cssEvenClass="evenElementStyle";
	$scope.cssOddClass="oddElementStyle";
	$scope.names = 	[
						"Harish Kasthurirangan",
						"Hiranmai Ramakrishnan",
						"Karthik Muthukrishnan",
						"Latha Subramanian",
						"Mangala Rangaswamy",
						"Rashmi Keshavamurthy",
						"Sarbananda Behera",
						"Sathiabama Ranganathan",
						"Tanmaya Acharya",
						"Uma Maheshwari",
						"Veena Keshavalu",
						"Vinod Manoharan"
					];
	$scope.imageSource = "delete.png";
	$scope.urlSource = "angularjs.org";
	$scope.partialPage = "partials/partial.html";
	
});

var eventNameSpace = angular.module('eventApp',[]);

eventNameSpace.controller('EventController',function($scope){
	$scope.counter = 0;
	$scope.status=false;
	$scope.statusText="Unchecked";
	
	$scope.IncrementCounter = function(){
		$scope.counter++;
	};
	
	$scope.ChangeCounter = function(flag){
		if(flag) 
			$scope.counter++;
		else
			$scope.counter--;
	};
	
	$scope.ChangeStatus = function(status){
		if(status)
			$scope.statusText="Checked";
		else
			$scope.statusText="Unchecked";
	};
});



