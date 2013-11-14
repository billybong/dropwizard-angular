angular.module('employeeApp.controllers',[]).
    controller('EmployeesListCtrl',['$scope', 'EmployeeFactory', function($scope, EmployeeFactory) {
        $scope.data = {employees: EmployeeFactory.query()};
    }]).
    controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'EmployeeFactory', '$location', function($scope, $routeParams, EmployeeFactory, $location){
        $scope.data = {
            employee: EmployeeFactory.get({id:$routeParams.employeeId})
        };

        $scope.update = function(){
            EmployeeFactory.update($scope.data.employee)
            $location.path('/');
        }
    }]);