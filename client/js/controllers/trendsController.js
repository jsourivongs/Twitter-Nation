app.controller('TrendsController', ['$scope', '$rootScope', 'TrendsFactory','$window',
function ($scope, $rootScope, TrendsFactory, $window) {

  $rootScope.trendQuery;
  $scope.trendNmaes;
  $scope.tweetVolume;
  $scope.responseJSON;

  $scope.setUS = function() {
    document.getElementById("stateField").innerHTML = "US";
    $scope.clicked();
    console.log("setUS")
  }
  /* Shows the top 5 trends for a given state code. */
  $scope.stateCode = function () {
    /* Makes a request to the backend by passing in a state code, and the received
    * response is a JSON object containing the 5 top trends for that state. */
    var code = angular.element(document.querySelector('.stateCode')).text();

    return code;
  }

  $scope.clicked = function(){
    TrendsFactory.create($scope.stateCode()).then(
      function (response) {
        $scope.responseJSON = response.data;
        var name=[];
        var volume=[];
        var query=[];
        for(var i=0; i<5; i++){
          name.push(response.data[i].name);
          query.push(response.data[i].query);
          volume.push(response.data[i].tweet_volume);
        }
        $rootScope.trendQuery=query;
        $scope.trendNames=name;
        $scope.tweetVolume=volume;

        new Chart(document.getElementById("bar-chart"), {
          type: 'bar',
          data: {
            labels: name,
            datasets: [
              {
                label: "Tweets",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: volume
              }
            ]
          },
          options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Twitter Trends'
            }
          }
        });

        new Chart(document.getElementById("pie-chart"), {
          type: 'pie',
          data: {
            labels: name,
            datasets: [{
              label: "Tweets",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: volume
            }]
          },
          options: {
            title: {
              display: true,
              text: 'Twitter Trends'
            }
          }
        });

        new Chart(document.getElementById("polar-chart"), {
          type: 'polarArea',
          data: {
            labels: name,
            datasets: [
              {
                label: "Tweets",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: volume
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'Twitter Trends'
            }
          }
        });

        $scope.trendNames = name;
        $scope.tweetVolume = volume;

        $scope.data = volume;
        $scope.$watch('data', function (newVal, oldVal) {
          $scope.data = newVal;
        }, true);
      },
      function (error) {
        console.log('ERROR - Unable to retrieve trends:', error);
      }
    );
    $window.scrollTo(0,1250);
  }
  $scope.onloadFun = function() {
    $scope.clicked();
    console.log("onload")
  }
}
]);
