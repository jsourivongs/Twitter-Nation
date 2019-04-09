app.controller('TweetsController', ['$scope', '$rootScope','TweetsFactory',
  function ($scope, $rootScope, TweetsFactory) {

    $scope.tweetsArray;

    $scope.showTweets = function() {
      TweetsFactory.create($rootScope.trendQuery).then(
        function(response) {
          var tweets = [];
          for(var i=0; i<5; i++){
            tweets.push(response.data[i]);
          }
          $scope.tweetsArray=tweets;
        },
        function(error) {
          console.log('Unable to retrieve tweets:', error);
        }
      )
		}

		// Show tweet data initially
		// $scope.showTweets();
  }
]);
