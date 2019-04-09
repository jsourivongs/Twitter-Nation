app.controller('TrendsController', ['$scope', '$rootScope', 'TrendsFactory',
  function ($scope, $rootScope, TrendsFactory) {

    $rootScope.trendQuery;
    $scope.trendNmaes;
    $scope.tweetVolume;

    /* Shows the top 5 trends for a given state code. */
    $scope.stateCode = function () {
      /* Makes a request to the backend by passing in a state code, and the received
       * response is a JSON object containing the 5 top trends for that state. */
       var code = angular.element(document.querySelector('.stateCode')).text();
       return code;
    }

    $scope.clicked = function(){
      TrendsFactory.create($scope.stateCode()).then(
       function (response) {
         var name=[];
         var volume=[];
         var query=[];
         for(var i=0; i<5; i++){
           name.push(response.data[i].name);
           query.push(response.data[i].query);
           volume.push(response.data[i].tweet_volume);
         }
         $rootScope.trendQuery=query;
         $scope.trendNames=name;
         $scope.tweetVolume=volume;
       },
       function (error) {
         console.log('ERROR - Unable to retrieve trends:', error);
       }
     );
    }


  }
]);
