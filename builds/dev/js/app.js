(function() {
   
var app = angular.module('app', []);
//controller
app.controller('Phones', ['$scope', '$http', '$sce', function($scope,$http,$sce) {
   //selectedPhone
   $scope.selectedPhone = 1;
   $scope.claimed = -1;
   
   $http.get('js/data.json').then(function(res) {
      $scope.phones = res.data;
      console.log($scope.phones);
      $scope.totalPhones = $scope.phones.length;
      
   });
   
   
   
   $scope.phoneColor = function(selectedPhone) {
     if($scope.selectedPhone == 0) {
         return $scope.phoneColor = 'pone';
     } 
      
   };
   
   
  
   
   
   
   
}]);//controller
   
   
   
   
})();

