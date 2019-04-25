app.factory('TweetsFactory', function($http) {
    var methods = {
      getTweetsByQuery: function(searchQuery) {
        return $http.get('https://twitter-nation.herokuapp.com/api/tweets/' + searchQuery);
      },
      create: function(trends){
        return $http.post('https://twitter-nation.herokuapp.com/api/tweets', trends);
      }
    }

    return methods;
  });
