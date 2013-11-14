angular.module('employeeApp.services', ['ngResource'])
    .factory('EmployeeFactory', function($resource){
        return $resource('/api/employees/:id',{id:'@id'}, {
            update: {method: 'PUT'}
        });
    })
    .value('version', '0.1');