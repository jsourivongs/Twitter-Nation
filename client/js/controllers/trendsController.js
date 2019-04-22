app.controller('TrendsController', ['$scope', '$rootScope', 'TrendsFactory','$window', '$timeout',
function ($scope, $rootScope, TrendsFactory, $window, $timeout) {

  $rootScope.trendQuery;
  $scope.trendNmaes;
  $scope.tweetVolume;
  $scope.responseJSON;
  $scope.oldCode = "";
  $scope.stateName = "United States";


 $scope.setState = function (input) {
        var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
        ['United States', 'US'],
    ];
    //var input ="WI";
    //input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
              console.log(states[i][0])
              $scope.stateName = states[i][0];
            }
        }    
        console.log(input)
  }


  $scope.setUS = function() {
    document.getElementById("stateField").innerHTML = "US";
    $scope.clicked();
    console.log("setUS")
  }
   $scope.setOldCode = function (code) {
    $scope.oldCode = code;
    console.log("old code:", code)
  }
  /* Shows the top 5 trends for a given state code. */
  $scope.stateCode = function () {
    /* Makes a request to the backend by passing in a state code, and the received
    * response is a JSON object containing the 5 top trends for that state. */
    var code = angular.element(document.querySelector('.stateCode')).text();
    $scope.setState(code)
    return code;
  }

  $scope.clicked = function(){
    if($scope.stateCode()==$scope.oldCode){
        console.log("same call")
    }
    else{
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

        // Removes old bar chart 
        $('#bar-chart').remove();
        $('#bar-chart-cont').html('<canvas id="bar-chart" width="500" height="350"></canvas>');
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

        // Removes old pie chart
        $('#pie-chart').remove();
        $('#pie-chart-cont').html('<canvas id="pie-chart" width="500" height="350"></canvas>');
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

        // Removes old polar chart 
        $('#polar-chart').remove();
        $('#polar-chart-cont').html('<canvas id="polar-chart" width="500" height="350"></canvas>');
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
  $scope.onloadFun = function() {
    $scope.clicked();
    // console.log("onload")
  }
}
]);
