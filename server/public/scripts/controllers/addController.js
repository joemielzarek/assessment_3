myApp.controller('AddController', ['$scope', '$http', function($scope, $http) {

    //Populates dropdown - Currently works for testing, but need to populate from database
    $scope.powers = ["Invisibility", "Flight", "Super Speed", "Heat Vision", "Super Strength", "Accelerated Healing", "Power Blast", "Animal Affinity"];

    $scope.currentHero = {};

    // Get powers from database
    $scope.getPowers = function() {
        $http.get('/powers')
            .then(function(response) {
                $scope.powers = response.data;
                console.log($scope.powers);
            });
    };

    // Send current hero info to database
    $scope.submitCurrentHero = function() {
        $scope.currentHero.power_name = $scope.selectedPower;
        var data = $scope.currentHero;

        $http.post('/heroes', data).then(function(response) {
            if (response.status == 201) {
                console.log('Hero saved');
            } else {
                console.log('error', response.data);
            }
        });
    };

}]);
