app.factory('TweetsFactory', function($http) {
    var methods = {
      getTweetsByQuery: function(searchQuery) {
        return $http.get('https://pacific-chamber-75209.herokuapp.com/api/tweets/' + searchQuery);
      },
      create: function(trends){
        return $http.post('https://pacific-chamber-75209.herokuapp.com/api/tweets', trends);
      }
    }

    return methods;
  });
