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
      
      
   });//data.json file
   
   
   $scope.phoneClaimed = function(selectedPhone,claimed) {
     
       if(selectedPhone > -1 && selectedPhone < 5) {
          $scope.claimed = -1;  
          $scope.selectedPhone = selectedPhone;
          console.log($scope.selectedPhone); 
         
       } else if (claimed == 711) {
          $scope.selectedPhone = selectedPhone;
          $scope.claimed = 711;
       }
         
   }//phoneClaimed
   
   
  
   
   
   
   
}]);//controller
   
   
   
   
})();

