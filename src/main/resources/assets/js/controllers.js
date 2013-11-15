var mod = angular.module('employeeApp.controllers', []);

/**********************************************
 * Controllers wired to Factories using the $resource service
 **********************************************/

mod.controller('EmployeesListCtrlUsingResource', ['$scope', 'EmployeeFactory', function ($scope, EmployeeFactory) {
    $scope.data = {employees: EmployeeFactoryUsingResource.query()};
}]);

mod.controller('EmployeeDetailCtrlUsingResource', ['$scope', '$routeParams', 'EmployeeFactory', '$location', function ($scope, $routeParams, EmployeeFactory, $location) {
    $scope.data = {
        employee: EmployeeFactoryUsingResource.get({id: $routeParams.employeeId})
    };

    $scope.update = function (employee) {
        EmployeeFactory.update(employee)
        $location.path('/');
    }
}]);

/**********************************************************
 * Controllers wired to Factories using a regular $http service
 **********************************************************/

mod.controller('EmployeesListCtrl', ['$scope', 'EmployeeFactory', function ($scope, EmployeeFactory) {
    EmployeeFactory.query(function(data){
        $scope.data = {employees: data};
    });
}]);

mod.controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'EmployeeFactory', '$location', function ($scope, $routeParams, EmployeeFactory, $location) {
    EmployeeFactory.get({id: $routeParams.employeeId}, function(data){
        $scope.data = { employee: data};
    });

    $scope.update = function (employee) {
        EmployeeFactory.update(employee, function(){
            $location.path('/');
        })
    }
}]);