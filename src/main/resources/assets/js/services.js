var module = angular.module('employeeApp.services', ['ngResource']);

/***************************************************************
 * Using $resource
 ***************************************************************/

module.factory('EmployeeFactoryUsingResource', function($resource){
        return $resource('/api/employees/:id',{id:'@id'}, {
            update: {method: 'PUT'}
        });
    })
    .value('version', '0.1');

/***************************************************************
 * Using a simple $http
 ***************************************************************/

module.factory('EmployeeFactory', function($http){
        return {
            'update': function(employee, callback){
                $http.put('/api/employees/' + employee.id, employee).success(callback);
            },

            'query': function(callback){
                $http.get('/api/employees').success(callback);
            },

            'get': function(employee, callback){
                $http.get('/api/employees/' + employee.id).success(callback);
            }
        };
    })
    .value('version', '0.1');