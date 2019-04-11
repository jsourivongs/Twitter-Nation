app.controller('TrendsController', ['$scope', 'TrendsFactory',
  function ($scope, TrendsFactory) {
    $scope.trendNames;
    $scope.tweetVolume;
    $scope.responseJSON;

    /* Shows the top 5 trends for a given state code. */
    $scope.stateCode = function () {
      /* Makes a request to the backend by passing in a state code, and the received
       * response is a JSON object containing the 5 top trends for that state. */
      var code = angular.element(document.querySelector('.stateCode')).text();
      return code;
    }

    $scope.clicked = function () {
      ;
      TrendsFactory.create($scope.stateCode()).then(
        function (response) {
          $scope.responseJSON = response.data;
          // console.log($scope.responseJSON);
          var name = [];
          var volume = [];

          for (var i = 0; i < 5; i++) {
            name.push(response.data[i].name);
            volume.push(response.data[i].tweet_volume);

          }

          // Bar chart
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
    }
  }
]);
