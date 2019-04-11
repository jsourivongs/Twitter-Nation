app.controller('TweetsController', ['$scope', '$rootScope','TweetsFactory',
  function ($scope, $rootScope, TweetsFactory) {

    $scope.tweetsArray;
    const tweets = document.getElementById("tweets");
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
      var s = $scope.tweetsArray[0];
      var index = s.indexOf("<script");
      s=s.substring(0,index);
      console.log(s);
      tweets.innerHTML = s;
    }

		// Show tweet data initially
		// $scope.showTweets();
  }
]);
