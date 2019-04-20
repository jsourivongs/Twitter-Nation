app.controller('TweetsController', ['$scope', '$rootScope', 'TweetsFactory', "$timeout",
  function ($scope, $rootScope, TweetsFactory, $timeout) {

    $scope.tweetsArray;
    const tweets = $("#tweets");
    const search = $("#abcd");

    $scope.showTweets = function () {
      $timeout( function(){
      TweetsFactory.create($rootScope.trendQuery).then(
        function (response) {
          console.log(response);
          var tweets = [];
          for (var i = 0; i < 5; i++) {
            tweets.push(response.data[i]);
          }
          $scope.tweetsArray = tweets;
          $scope.stringBasedHTML();
        },
        function (error) {
          console.log('Unable to retrieve tweets:', error);
        }
      );
    }, 1500);
  }

    $scope.searchResult;
    $scope.searchTweets = function () {
      if ($scope.searchQuery) {
        encodedQuery = encodeURIComponent($scope.searchQuery);
        TweetsFactory.getTweetsByQuery(encodedQuery).then(
          function (response) {
            $scope.searchResult = response.data;


            console.log(response.data.favorite_count);
            console.log(response.data.followers_count);
            console.log(response.data.retweet_count);

            $scope.stringBasedHTML2();
          },
          function (error) {
            console.log('Unable to retrieve tweets:', error);
          }
        )
      }
    }

    $scope.stringBasedHTML = function () {
      var s = "";
      for (var i = 0; i < 5; i++) {
        s += $scope.tweetsArray[i];
      }
      tweets.html(s);
    }

    $scope.stringBasedHTML2 = function () {
        s = $scope.searchResult.block_quote;
        search.html(s);
    }


    $scope.onloadFun = function() {
        $scope.showTweets();
    }
  }
]);
