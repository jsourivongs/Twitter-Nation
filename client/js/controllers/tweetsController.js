app.controller('TweetsController', ['$scope', '$rootScope','TweetsFactory',
  function ($scope, $rootScope, TweetsFactory) {

    $scope.tweetsArray;
    const tweets = $("#tweets");
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

    $scope.stringBasedHTML = function(){
      var s ="";
      for( var i=0; i<5; i++){
        s+=$scope.tweetsArray[i];
      }
      console.log(s);
      tweets.html(s);
    }

		// Show tweet data initially
		// $scope.showTweets();
  }
]);
