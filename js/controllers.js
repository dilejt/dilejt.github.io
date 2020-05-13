var portfolioApp = angular.module('TigerClawApp', []);
portfolioApp.controller('GalleryListCtrl', function($scope,$http) {
    $http.get("json/galleries.json").then(function(response) {
        $scope.galleries = response.data.galleries;
        $scope.sortList = response.data.sortList;
        $scope.orderProp = $scope.sortList[0];
    });
}); 

