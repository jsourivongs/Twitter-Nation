angular.module('tweets').controller('TweetsController', ['$scope', 'Tweets', 
  function($scope, Tweets) {
    $scope.showTweets = function() {
      Tweets.getTweets().then(
        function(response) {
          $scope.tweets = response.data;
        }, 
        function(error) {
          console.log('Unable to retrieve tweets:', error);
        }
      )
		}
		
		// Show tweet data initially
		$scope.showTweets();
  }
]);