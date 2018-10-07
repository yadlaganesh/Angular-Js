var app = angular.module("serviceApp",[]);


app.factory("$exceptionHandler",function(){
	return function(exception,cause){
		console.log("Exception Handled : "+exception.message);
	}
})

