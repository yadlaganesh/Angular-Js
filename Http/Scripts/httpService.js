var app = angular.module("serviceApp",[]);


app.factory("loadGuests",function($http,$log){
	return{
		retrieveGuests : function(success){
			$http({
					method:'GET',
					//url:'data/guests.json'
					/*Connecting mongodb database via mongolab*/
					url:'https://api.mongolab.com/api/1/databases/igateangulardb/collections/guests?apiKey=Y6KaLZK8I2pEA-zgfk8oGNP6v8IVOLFm'
				})
				.success(function(data,status,headers,config){
					success(data); // Callback function
					$log.info(data,status,headers(),config);
				})
				.error(function(data,status,headers,config){
					$log.warn(data,status,headers(),config);
				}
			);
		} 
	}
})

