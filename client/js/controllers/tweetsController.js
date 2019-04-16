app.controller('TweetsController', ['$scope', '$rootScope','TweetsFactory',
  function ($scope, $rootScope, TweetsFactory, $timeout) {

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

    $scope.stringBasedHTML = function(){
      var s = "";
      for(var i=0; i<5; i++){
        s=s+$scope.tweetsArray[i];
      }
      console.log(s);
      //var index = s.indexOf("<script");
      //s=s.substring(0,index);
      //var index = s.indexOf("<script");
      //  s=s.substring(0,index);

      tweets.html(s);

    //<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
     //  var codes = tweets.getElementsByTagName("script");
     //  for(var i=0;i<codes.length;i++)
     //  {
     //   eval(codes[i].innerHTML);
     // }
     // console.log(codes[0]);
    }

		// Show tweet data initially
		// $scope.showTweets();
  }
]);
