myApp.controller('ShowController', ['$scope', '$http', function($scope, $http) {

    //Populates dropdown - Currently works for testing, but need to populate from database
    $scope.powers = ["Invisibility", "Flight", "Super Speed", "Heat Vision", "Super Strength", "Accelerated Healing", "Power Blast", "Animal Affinity"];

    $scope.heroes = [];

    getHeroes();
    getPowers()

    // Delete specified hero from database
    $scope.deleteHero = function(id) {
        $http.delete('/heroes/' + id)
            .then(function(response) {
                console.log('DELETE /heroes ', id);
                getHeroes();
            });
    };

    // Get submitted heroes from database
    function getHeroes() {
        $http.get('/heroes')
            .then(function(response) {
                $scope.heroes = response.data;
                console.log('GET /heroes ', response.data);
            });
    }

    // Get powers from database
    function getPowers() {
        $http.get('/powers')
            .then(function(response) {
                $scope.powers = response.data;
                console.log('GET /powers ', response.data);
            });
    }

}]);
