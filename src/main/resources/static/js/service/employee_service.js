'use strict';
 
angular.module('myApp').factory('EmployeeService', ['$http', '$q', function($http, $q){
 
    var REST_SERVICE_URI = 'http://localhost:8080';
 
    var factory = {
    	fetchAllEmployees: fetchAllEmployees,
        createEmployee: createEmployee,
        updateEmployee: updateEmployee,
        deleteEmployee: deleteEmployee
    };
 
    return factory;
 
    function fetchAllEmployees() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI+"/employees")
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Employees');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
    function createEmployee(emp) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI+"/createemployee", emp)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating Employee');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
 
    function updateEmployee(emp, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, emp)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
    function deleteEmployee(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
}]);