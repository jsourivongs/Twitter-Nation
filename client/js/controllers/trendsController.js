// angular.module('trends').controller('TrendsController', ['$scope', 'TrendsFactory', 
//   function($scope, TrendsFactory) {

//     $scope.showTrends = function() {
//       TrendsFactory.getAll().then(
//         function(response) {
//           $scope.trends = response.data;
//         }, 
//         function(error) {
//           console.log('Unable to retrieve trends:', error);
//         }
//       );
//     }

//     // Show trends initially
//     // $scope.showTrends();

//     $scope.addTrend = function() {
//       TrendsFactory.create($scope.newTrend).then(function(err) {
//         if (err) console.log(err);
//         $scope.refreshPage();
//       })
//     };
//   }
// ]);

// var app = angular.module('twitApp', []);
app.controller('TrendsController', ['$scope', 'TrendsFactory', 
function($scope, TrendsFactory) {
  
  // $scope.print = function() {
  //   console.log($scope.stateCode);
  // };

  $scope.stateCode = 'CA';
  
  $scope.showTrends = function($scope) {
    console.log("called showTrends()");
    console.log("$scope.stateCode = " + $scope.stateCode);
    TrendsFactory.create($scope.stateCode).then(
      function(response) {
        // $scope.stateCode = response.data;
        console.log(response.data);
      }, 
      function(error) {
        console.log('ERROR - Unable to retrieve trends:', error);
      }
    )
  }
  $scope.showTrends($scope);

  // $scope.stateCode = 'US';
  // console.log($scope.stateCode);

  // if ($scope.stateCode == 'FL')
  //   console.log('Florida');

  // $scope.stateName == "Florida";

  // $scope.showTrends();
  // $scope.showTrends = function() {
  //   if ($scope.stateCode == 'FL')
  //     $scope.stateName == "Florida";
  // }
}]);

