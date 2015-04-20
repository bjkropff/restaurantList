BestRest.controller("RestCtrl", function RestCtrl($scope) {
    $scope.restaurant = [];
    $scope.addRestaurant = function() {
        $scope.restaurant.push
    ({
        name: $scope.restaurantName,
        price: $scope.restaurantPrice,
        type: $scope.restaurantType
    })

    $scope.restaurantName = null;
    $scope.restaurantPrice = null;
    $scope.restaurantType = null;
    },


    $scope.deleteRestaurant = function(name) {
        var index = $scope.restaurant.indexOf(name);
        $scope.restaurant.splice(index, 1)
    }


});
