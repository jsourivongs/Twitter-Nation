app.controller('TrendsController', ['$scope', 'TrendsFactory',
  function ($scope, TrendsFactory) {

    /* Shows the top 5 trends for a given state code. */
    $scope.showTrends = function ($scope) {
      var stateCode = angular.element(document.querySelector('.stateCode')).text();
      console.log("stateCode = " + stateCode);

      /* Makes a request to the backend by passing in a state code, and the received
       * response is a JSON object containing the 5 top trends for that state. */
      TrendsFactory.create(stateCode).then(
        function (response) {
          console.log(response.data);
        },
        function (error) {
          console.log('ERROR - Unable to retrieve trends:', error);
        }
      )
    }
  }
]);