app.controller('TweetsController', ['$scope', '$rootScope','TweetsFactory',
  function ($scope, $rootScope, TweetsFactory, $timeout) {

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

    $scope.searchResult = "(No search results yet)";
    
    $scope.searchTweets = function() {
      if ($scope.searchQuery) {
        encodedQuery = encodeURIComponent($scope.searchQuery);
        TweetsFactory.getTweetsByQuery(encodedQuery).then(
          function(response) {
            var tweets = [];
            for(var i=0; i<5; i++){
              tweets.push(response.data[i]);
            }
            $scope.searchResult = tweets;
          },
          function(error) {
            console.log('Unable to retrieve tweets:', error);
          }
        )
      }
      // $timeout(function () {
      //   twttr.widgets.load();
      // }, 30);
    }

		// Show tweet data initially
		// $scope.showTweets();
  }
]);
