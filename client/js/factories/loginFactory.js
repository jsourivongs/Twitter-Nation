app.factory('LoginFactory' , function($http) {
    var methods = {
      login: function(username, password) {
        var credentials = {
          username: username,
          password: password
        }
        var ret = $http.post('http://localhost:8080/api/login', credentials);
        return ret;
      },
      retTrue: function(username, password) {
        return true;
        // return $http.get('http://localhost:8080/api/login', username, password);
      },
      logout: function() {
        var ret = $http.delete('http://localhost:8080/api/logout');
      }
    };
    return methods;
  });
  