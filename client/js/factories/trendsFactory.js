app.factory('TrendsFactory', function($http) {
    var methods = {
      getAll: function() {
        return $http.get('https://pacific-chamber-75209.herokuapp.com/api/trends');
      },
      create: function(stateCode) {
        return $http.get('https://pacific-chamber-75209.herokuapp.com/api/trends/' + stateCode);
      }
    };

    return methods;
  });
