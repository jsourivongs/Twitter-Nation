app.controller('TweetsController', ['$scope', '$rootScope','TweetsFactory',
  function ($scope, $rootScope, TweetsFactory, $timeout) {

    $scope.tweetsArray;
    const tweets = $("#tweets");
    const search = $("#abcd");
    $scope.showTweets = function() {
      TweetsFactory.create($rootScope.trendQuery).then(
        function(response) {
          var tweets = [];
          for(var i=0; i<5; i++){
            tweets.push(response.data[i]);
          }
          $scope.tweetsArray=tweets;
          console.log("done");
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
    }

    $scope.stringBasedHTML = function(){
      var s ="";
      for( var i=0; i<5; i++){
        s+=$scope.tweetsArray[i];
      }
      console.log(s);
      tweets.html(s);
    }

    $scope.stringBasedHTML2 = function(){
      
        s=$scope.searchResult[0];
      search.html(s);
    }

		// Show tweet data initially
		// $scope.showTweets();
  }
]);
