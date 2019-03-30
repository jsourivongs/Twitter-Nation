angular.module('tweets', []).factory('TweetsFactory', function($http) {
    var methods = {
      showTweets: function() {
        // return $http.get('http://localhost:8080/api/listings');
      }
    };
  
    return methods;
  });
  