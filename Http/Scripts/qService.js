var app = angular.module("serviceApp",[]);


app.factory("guestService",function($http,$q){
	return{
		retrieveGuests : function(){
			var deffered  = $q.defer();
			$http({
					method:'POST',
					url:'http://10.3.240.186:9080/pip-services/pip-login',
				})
				.success(function(data,status,headers,config){
					deffered.resolve(data);
				})
				.error(function(data,status,headers,config){
					deffered.reject(status);
				});
			return deffered.promise;
		} 
	}
})