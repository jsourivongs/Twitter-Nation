angular.module('tweets', []).factory('TweetsFactory', function($http) {
    var methods = {
      getTweets: function(topTrends) {
        return $http.get('http://localhost:8080/api/tweets', topTrends);
      }
    };
  
    return methods;
  });
  