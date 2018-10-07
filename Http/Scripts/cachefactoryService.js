var app = angular.module("serviceApp",[]);


app.factory("customCache",function($cacheFactory){
	return $cacheFactory('customCache')
	//return $cacheFactory('customCache',{capacity:2})
})

