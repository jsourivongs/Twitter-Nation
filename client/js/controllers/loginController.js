// angular.module('loginRedirect').controller('LoginController', ['$scope', '$window', 'LoginFactory',
app.controller('LoginController', ['$scope', '$window', 'LoginFactory',
  function ($scope, $window, LoginFactory) {
    $scope.authenticate = function(username, password) {
      //$window.alert(username+" "+password);
      var loggedIn = false;
      loggedIn = LoginFactory.login(username, password);
      if (loggedIn) {
        $window.location.href = '/dashboard.html';
      }
      else {
        $window.alert("Wrong username or password!");
      }
    }
  }
]);