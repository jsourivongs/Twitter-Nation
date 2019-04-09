app.factory('TweetsFactory', function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:8080/api/tweets');
      },

      create: function(trends){
        return $http.post('http://localhost:8080/api/tweets', trends);
      }
    }

    return methods;
  });
