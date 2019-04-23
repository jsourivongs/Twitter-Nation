app.controller('LoginController', ['$scope', '$window', 'LoginFactory',
  function ($scope, $window, LoginFactory) {
    $scope.authenticate = function(username, password) {
      LoginFactory.login(username, password).then(function(response) {
        if (response.data) {
          $window.location.href = '/dashboard.html';
        }
        else {
          $window.alert("Wrong username or password!");
        }
      });
    }

    $scope.logout = function(){
      LoginFactory.logout().then(function(){
        $window.location.href = '/';
      })
    }
  }
]);
