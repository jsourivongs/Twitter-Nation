app.factory('LoginFactory' , function($http) {
    var methods = {
      login: function(username, password) {
        var credentials = {
          username: username,
          password: password
        }
        var ret = $http.post('https://pacific-chamber-75209.herokuapp.com/api/login', credentials);
        return ret;
      },
      retTrue: function(username, password) {
        return true;
        // return $http.get('https://pacific-chamber-75209.herokuapp.com/api/login', username, password);
      },
      logout: function() {
        var ret = $http.delete('https://pacific-chamber-75209.herokuapp.com/api/logout');
      }
    };
    return methods;
  });
  
