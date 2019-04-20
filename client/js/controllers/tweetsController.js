app.controller('TweetsController', ['$scope', '$rootScope', 'TweetsFactory', "$timeout",
  function ($scope, $rootScope, TweetsFactory, $timeout) {

    $scope.tweetsArray;
    const tweets = $("#tweets");

    $scope.showTweets = function () {
      TweetsFactory.create($rootScope.trendQuery).then(
        function (response) {
          var tweets = [];
          for (var i = 0; i < 5; i++) {
            tweets.push(response.data[i]);
          }
          $scope.tweetsArray = tweets;
          console.log($scope.tweetsArray);
          $scope.stringBasedHTML();
        },
        function (error) {
          console.log('Unable to retrieve tweets:', error);
        }
      );
    }

    const search = $("#abcd");
    $scope.searchResult;

    $scope.searchTweets = function () {
      if ($scope.searchQuery) {
        encodedQuery = encodeURIComponent($scope.searchQuery);
        TweetsFactory.getTweetsByQuery(encodedQuery).then(
          function (response) {
            $scope.searchResult = response.data;
          },
          function (error) {
            console.log('Unable to retrieve a tweet for your search:', error);
          }
        )
      }
    }

    $scope.stringBasedHTML = function () {
      delay(50);
      var s = "";
      for (var i = 0; i < 5; i++) {
        s += $scope.tweetsArray[i];
      }
      console.log(s);
      tweets.html(s);
    }

    $scope.stringBasedHTML2 = function () {
      delay(500);
      s = $scope.searchResult.block_quote;
      console.log('rt count: ' + $scope.searchResult.retweet_count);
      console.log('fav count: ' + $scope.searchResult.favorite_count);
      console.log('fol count: ' + $scope.searchResult.followers_count);
      search.html(s);
    }

    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    // Show tweet data initially
    // $scope.showTweets();

    $scope.onloadFun = function() {
      $timeout(
      $scope.showTweets(), 300000);
    }
  }
]);
