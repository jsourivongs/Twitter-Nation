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

var app = angular.module('twitApp', []);
app.controller('TrendsController', ['$scope', function($scope) {

    console.log('idk');
    console.log($scope.stateCode);

    if ($scope.stateCode == 'FL')
      console.log('Florida');

      // $scope.stateName == "Florida";

    // $scope.showTrends();
    // $scope.showTrends = function() {
    //   if ($scope.stateCode == 'FL')
    //     $scope.stateName == "Florida";
    // }
  }
]);

