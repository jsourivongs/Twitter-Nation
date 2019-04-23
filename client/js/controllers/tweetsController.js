app.controller('TweetsController', ['$scope', '$rootScope', 'TweetsFactory', "$timeout",
  function ($scope, $rootScope, TweetsFactory, $timeout) {

    $scope.tweetsArray;
    const tweets = $("#tweets");
    $scope.query = "No Current Search"

    $scope.showTweets = function () {
      $timeout( function(){
      TweetsFactory.create($rootScope.trendQuery).then(
        function (response) {
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

    const search = $("#abcd");
    $scope.searchResult;

    $scope.scroll = function (){
      var hash = "#abcd";
        $('html, body').animate({
               scrollTop: $(hash).offset().top + 600
               }, 800, function(){

          window.location.hash = hash;
          });
    }

    $scope.searchTweets = function () {
      if ($scope.searchQuery) {
        document.getElementById("searchTitle").innerHTML = $scope.searchQuery;
        //console.log($scope.searchQuery);
        encodedQuery = encodeURIComponent($scope.searchQuery);
        TweetsFactory.getTweetsByQuery(encodedQuery).then(
          function (response) {
            $scope.searchResult = response.data;

            var ctx = document.getElementById('searchGraph').getContext('2d');
            var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Favorites', 'Followers (Hundreds)', 'Retweets'],
                datasets: [{
                  label: 'Data',
                  data: [response.data.favorite_count, response.data.followers_count/100, response.data.retweet_count],
                  backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"]
                }]
              },
              options: {
                scales: {
                  yAxes: [{
                    ticks: {
                      suggestedMin: 0
                    }
                  }]
                }
              }
            });

            $scope.stringBasedHTML2();
          },
          function (error) {
            console.log('Unable to retrieve a tweet for your search:', error);
          }
        )
      }
      $scope.scroll();
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
