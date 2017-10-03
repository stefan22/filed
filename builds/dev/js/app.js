(function() {
   
var app = angular.module('app', []);
//controller
app.controller('Phones', ['$scope', '$http', '$sce', function($scope,$http,$sce) {
   //phoneColor & selectedPhone
   $scope.phoneColor = '';
   $scope.selectedPhone = -1;
   
   $http.get('js/data.json').then(function(res) {
      $scope.phones = res.data;
      console.log($scope.phones);
      $scope.totalPhones = $scope.phones.length;
      
   });
   
   
   
   
}]);//controller
   
   
   
   
})();

