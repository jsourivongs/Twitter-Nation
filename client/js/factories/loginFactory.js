app.factory('LoginFactory' , function($http) {
    var methods = {
      login: function(username, password) {
        var credentials = {
          username: username,
          password: password
        }
        return $http.get('http://localhost:8080/api/login', credentials);
      },
      retTrue: function(username, password) {
        return true;
        // return $http.get('http://localhost:8080/api/login', username, password);
      }
    };
    return methods;
  });
  