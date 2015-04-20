BestRest.controller("RestCtrl", function RestCtrl($scope) {
    $scope.restaurant = [];
    $scope.addRestaurant = function() {
        $scope.restaurant.push
    ({
        name: $scope.restaurantName,
    })

    $scope.restaurantName = null;
    },


    $scope.deleteRestaurant = function(name) {
        var index = $scope.restaurant.indexOf(name);
        $scope.restaurant.splice(index, 1)
    }


});
