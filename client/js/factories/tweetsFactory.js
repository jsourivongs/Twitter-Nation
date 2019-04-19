app.factory('TweetsFactory', function($http) {
    var methods = {
      getTweetsByQuery: function(searchQuery) {
        return $http.get('http://localhost:8080/api/tweets/' + searchQuery);
      },

      create: function(trends){
        return $http.post('http://localhost:8080/api/tweets', trends);
      }
    }

    return methods;
  });
