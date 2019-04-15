app.factory('TrendsFactory', function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:8080/api/trends');
      },

      create: function(stateCode) {
        return $http.get('http://localhost:8080/api/trends/' + stateCode);
      }
    };

    return methods;
  });
