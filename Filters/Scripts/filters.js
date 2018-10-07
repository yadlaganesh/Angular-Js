angular.module('filterApp',[])
.filter('getIntegers',function(){
	return function(numberArray){
		var size = numberArray.length;
		var evenNumbers = [];
		for(counter=0;counter<size;counter++)
		{
			if(numberArray[counter]%2==0) //Check for Even number and add to evenNumbers Array
				evenNumbers.push(numberArray[counter]);
		}
		return evenNumbers;
	}
})
.filter('concatNationalCode',function(){ 
	return function(item) { 
		return "+91-"+item;
	 }
})

.controller('FilterController', function($scope,$filter) {
	 $scope.guests = 
		[
			{
				"guestId":101,
				"guestName":"Anil",
				"contactNumber":"8645635092"
			},
			{
				"guestId":102,
				"guestName":"Ganesh",
				"contactNumber":"9946945634"
			},
			{
				"guestId":103,
				"guestName":"Karthik",
				"contactNumber":"9986173092"
			},
			{
				"guestId":104,
				"guestName":"Shashank",
				"contactNumber":"9986464892"
			},
			{
				"guestId":105,
				"guestName":"Abishek",
				"contactNumber":"9958659892"
			},
			{
				"guestId":106,
				"guestName":"Nachiket",
				"contactNumber":"8997358092"
			},
			{
				"guestId":107,
				"guestName":"Vaishali",
				"contactNumber":"9739179037"
			}
		];
		$scope.sortColumn = "+guestId";
});


