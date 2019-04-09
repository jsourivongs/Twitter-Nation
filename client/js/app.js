/* register the modules the application depends upon here*/
angular.module('tweets', []);
angular.module('trends', []);
angular.module('loginRedirect', []);
/* register the application and inject all the necessary dependencies */
var app = angular.module('twitApp', ['trends', 'tweets', 'loginRedirect']);
// var app = angular.module('twitApp', []);
