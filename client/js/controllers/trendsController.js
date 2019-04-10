app.controller('TrendsController', ['$scope', 'TrendsFactory',
  function ($scope, TrendsFactory) {

    $scope.trendNames;
    $scope.tweetVolume;
    $scope.responseJSON;

    /* Shows the top 5 trends for a given state code. */
    $scope.stateCode = function () {
      /* Makes a request to the backend by passing in a state code, and the received
       * response is a JSON object containing the 5 top trends for that state. */
       var code = angular.element(document.querySelector('.stateCode')).text();
       return code;
    }

    $scope.clicked = function(){;
      TrendsFactory.create($scope.stateCode()).then(
       function (response) {
        $scope.responseJSON = response.data;
        // console.log($scope.responseJSON);
         var name=[];
         var volume=[];
         
         for(var i=0; i<5; i++){
           name.push(response.data[i].name);
           volume.push(response.data[i].tweet_volume);
          
          }
         $scope.trendNames = name;
         $scope.tweetVolume = volume;

        $scope.data = volume;
        $scope.$watch('data', function(newVal, oldVal) {
          $scope.data = newVal;
        }, true);
       },
       function (error) {
         console.log('ERROR - Unable to retrieve trends:', error);
       }
     );
    }
  }
]);
