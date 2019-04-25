app.factory('LoginFactory' , function($http) {
    var methods = {
      login: function(username, password) {
        var credentials = {
          username: username,
          password: password
        }
        var ret = $http.post('https://twitter-nation.herokuapp.com/api/login', credentials);
        return ret;
      },
      logout: function() {
        var ret = $http.delete('https://twitter-nation.herokuapp.com/api/logout');
      }
    };
    return methods;
  });
  
