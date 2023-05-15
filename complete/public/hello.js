angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:8081/greeting-javaconfig').
        then(function(response) {
            $scope.greeting = response.data;
        });
});
angular.module('demo', [])
.controller('Test', function($scope, $http) {
    $http.get('http://localhost:8081/greeting-javaconfig').
        then(function(response) {
            $scope.greeting = response.data;
        });
});