app.controller('TweetsController', ['$scope', '$rootScope','TweetsFactory',
  function ($scope, $rootScope, TweetsFactory) {

    $scope.tweetsArray;

    $scope.showTweets = function() {
      TweetsFactory.create($rootScope.trendQuery).then(
        function(response) {
<<<<<<< HEAD
          var tweets = [];
          for(var i=0; i<5; i++){
            tweets.push(response.data[i]);
          }
          $scope.tweetsArray=tweets;
=======
          $scope.tweets = response;
>>>>>>> 73d59ee37779563c6ef03e466d47c543f575928e
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
