var employeeApp = angular.module('employeeApp',[
    'ngRoute',
    'employeeApp.controllers',
    'employeeApp.services']).
    config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
        $routeProvider.
            when('/', {templateUrl: 'partials/employees-list.html', controller: 'EmployeesListCtrl'}).
            when('/employees/:employeeId', {templateUrl: '/partials/employee-details.html', controller: 'EmployeeDetailCtrl'}).
            //when('/employees/:employeeId/edit', {templateUrl: 'partials/employee-edit.html', controller: EmployeeeEditCtrl}).
            //when('/employees/:employeeId/new', {templateUrl: 'partials/employee-new.html', controller: EmployeeNewCtrl}).
            otherwise({redirectTo: '/'});

        $locationProvider.html5Mode(false);
    }]);