app.controller('TweetsController', ['$scope', '$rootScope','TweetsFactory',
  function ($scope, $rootScope, TweetsFactory) {

    $scope.tweetsArray;

    $scope.showTweets = function() {
      TweetsFactory.create($rootScope.trendQuery).then(
        function(response) {
          $scope.tweets = response;
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
