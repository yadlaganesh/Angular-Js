var app = angular.module("serviceApp",['ngResource']);

app.factory("EmployeeService", function ($resource) {
    //return $resource('data/employees/:Id.json', { Id: '@Id' }, { "update": { method: "PUT" }});
	return $resource('http://10.3.240.186:9080/pip-services/get-ldap-domains/', { _id: '@_id' }, { "update": { method: "GET" }}, { "delete": { method: "GET" }});
})



