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
      logout: function() {
        var ret = $http.delete('https://pacific-chamber-75209.herokuapp.com/api/logout');
      }
    };
    return methods;
  });
  
