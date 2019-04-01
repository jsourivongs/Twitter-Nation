app.controller('TweetsController', ['$scope', 'TweetsFactory',
  function ($scope, TweetsFactory) {

    $scope.showTweets = function ($scope) {
      var trends = [{
          name: 'Nipsey',
          url: 'http://twitter.com/search?q=Nipsey',
          promoted_content: null,
          query: 'Nipsey',
          tweet_volume: 3985429
        },
        {
          name: 'April Fools',
          url: 'http://twitter.com/search?q=%22April+Fools%22',
          promoted_content: null,
          query: '%22April+Fools%22',
          tweet_volume: 1511411
        },
        {
          name: 'Girl',
          url: 'http://twitter.com/search?q=Girl',
          promoted_content: null,
          query: 'Girl',
          tweet_volume: 892188
        },
        {
          name: 'Lauren London',
          url: 'http://twitter.com/search?q=%22Lauren+London%22',
          promoted_content: null,
          query: '%22Lauren+London%22',
          tweet_volume: 286613
        },
        {
          name: 'Duke',
          url: 'http://twitter.com/search?q=Duke',
          promoted_content: null,
          query: 'Duke',
          tweet_volume: 258406
        }
      ]

      TweetsFactory.getTweets(trends).then(
        function (response) {
          console.log(response.data);
        },
        function (error) {
          console.log('ERROR - Unable to retrieve tweets:', error);
        }
      )
    }

    // Show tweet data initially
    // $scope.showTweets();
  }
]);