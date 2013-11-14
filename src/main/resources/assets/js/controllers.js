angular.module('employeeApp.controllers',[]).
    controller('EmployeesListCtrl',['$scope', 'EmployeeFactory', function($scope, EmployeeFactory) {
        $scope.employees = EmployeeFactory.query();
    }]).
    controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'EmployeeFactory', '$location', function($scope, $routeParams, EmployeeFactory, $location){
        $scope.employeeId = $routeParams.employeeId;
        $scope.employee = EmployeeFactory.get({id:$routeParams.employeeId});

        $scope.update = function(employee){
            EmployeeFactory.update(employee)
            $location.path('/');
        }
    }]);