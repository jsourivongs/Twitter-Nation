angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://sleepy-sierra-99805.herokuapp.com/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('https://sleepy-sierra-99805.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
      return $http.delete('https://sleepy-sierra-99805.herokuapp.com/api/listings/' + id);
    }
  };

  return methods;
});
