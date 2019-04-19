app.controller('TweetsController', ['$scope', '$rootScope', 'TweetsFactory', "$timeout",
  function ($scope, $rootScope, TweetsFactory, $timeout) {

    $scope.tweetsArray;
    const tweets = $("#tweets");
    const search = $("#abcd");

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

    $scope.searchResult;
    $scope.searchTweets = function () {
      if ($scope.searchQuery) {
        encodedQuery = encodeURIComponent($scope.searchQuery);
        TweetsFactory.getTweetsByQuery(encodedQuery).then(
          function (response) {
            var tweets = [];
            for (var i = 0; i < 5; i++) {
              tweets.push(response.data[i]);
            }
            $scope.searchResult = tweets;
          },
          function (error) {
            console.log('Unable to retrieve tweets:', error);
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
      delay(50);
      s = $scope.searchResult[0];
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
