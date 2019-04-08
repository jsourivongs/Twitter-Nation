angular.module('tweets').controller('TweetsController', ['$scope', 'TweetsFactory', 
  function($scope, TweetsFactory) {
    $scope.tweets = 'idk';

    $scope.showTweets = function() {
      TweetsFactory.getAll().then(
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
