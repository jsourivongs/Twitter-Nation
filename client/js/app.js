/* register the modules the application depends upon here*/
angular.module('tweets', []);
angular.module('trends', []);
angular.module('loginRedirect', []);
angular.module('barChart', []);
/* register the application and inject all the necessary dependencies */
var app = angular.module('twitApp', ['tweets', 'trends', 'loginRedirect', 'barChart']);
// var app = angular.module('twitApp', []);
