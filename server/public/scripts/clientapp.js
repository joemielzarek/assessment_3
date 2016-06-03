var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/add', {
      templateUrl: '/views/add.html',
      controller: "AddController"
    })
    .when('/show', {
      templateUrl: '/views/show.html',
      controller: "ShowController"
    })
    .otherwise({
      redirectTo: 'add'
    })

}]);
