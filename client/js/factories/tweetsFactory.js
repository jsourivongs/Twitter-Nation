angular.module('tweets', []).factory('TweetsFactory', function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:8080/api/tweets');
      }
    };
  
    return methods;
  });
  