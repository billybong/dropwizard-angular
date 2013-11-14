var mod = angular.module('employeeApp.controllers', []);

mod.controller('EmployeesListCtrl', ['$scope', 'EmployeeFactory', function ($scope, EmployeeFactory) {
    $scope.data = {employees: EmployeeFactory.query()};
}]);


mod.controller('FakeCtrl', ['$scope', function ($scope) {
    $scope.data = {employees: [
        {id: 1, name: 'Dumbo', yearsWorked:5, skill:'none'},
        {id: 2, name: 'Långben', yearsWorked:2, skill:'peta näsan'}
    ]};
}]);

mod.controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'EmployeeFactory', '$location', function ($scope, $routeParams, EmployeeFactory, $location) {
    $scope.data = {
        employee: EmployeeFactory.get({id: $routeParams.employeeId})
    };

    $scope.update = function (employee) {
        EmployeeFactory.update(employee)
        $location.path('/');
    }
}]);