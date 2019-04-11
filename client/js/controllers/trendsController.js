app.controller('TrendsController', ['$scope', 'TrendsFactory',
  function ($scope, TrendsFactory) {

    $scope.data = [500000, 400000, 300000, 248222, 100000];
    $scope.$watch('data', function(newVal, oldVal) {
      $scope.data = newVal;
    }, true);


    $scope.trendNames;
    $scope.tweetVolume;
    $scope.responseJSON;
    $scope.counter = 0;

    /* Shows the top 5 trends for a given state code. */
    $scope.stateCode = function () {
      /* Makes a request to the backend by passing in a state code, and the received
       * response is a JSON object containing the 5 top trends for that state. */
       //var code = angular.element(document.querySelector('.stateCode')).text();
       
       if($scope.counter%2==0){
        code="FL"
      }
       else{
        code="NY"
      }

      $scope.counter++;
      console.log(code)
       return code;
    }

    $scope.clicked = function(){;
      console.log("clicked")
      TrendsFactory.create($scope.stateCode()).then(
       function (response) {
        $scope.responseJSON = response.data;
        // console.log($scope.responseJSON);
         var name=[];
         var volume=[];
         for(var i=0; i<5; i++){
           name.push(response.data[i].name);
           volume.push(response.data[i].tweet_volume);
         }
         $scope.trendNames = name;
         $scope.tweetVolume = volume;
         $scope.$watch('tweetVolume', function(newVal, oldVal) {
            $scope.tweetVolume = newVal;
         }, true);

        console.log(volume);
        $scope.data = volume;
        $scope.$watch('data', function(newVal, oldVal) {
          $scope.data = newVal;
        }, true);
       },
       function (error) {
         console.log('ERROR - Unable to retrieve trends:', error);
       }
     );
    }
  }
]).directive('barChart', function($window) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        data: '='
      },
      template: '<div id="bar-chart"></div>',
      link: function(scope, element, attrs, fn) {

        var data = scope.data;
        var d3 = $window.d3;
        var rawSvg = element;

        var colors = d3.scale.category10();

        var canvas = d3.select(rawSvg[0])
          .append('svg')
          .attr("width", 300)
          .attr("height", 150);

        scope.$watch('data', function(newVal, oldVal) {
          data = newVal;
          repaintChart();
        }, true);

        var xscale = d3.scale.linear()
          .domain([0, 5000000])
          .range([0, 240]);

        var yscale = d3.scale.linear()
          .domain([0, data.length])
          .range([0, 130]);

        var bar = canvas.append('g')
          .attr("id", "bar-group")
          .attr("transform", "translate(10,20)")
          .selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr("class", "bar")
          .attr("height", 15)
          .attr("x", 0)
          .attr("y", function(d, i) {
            return yscale(i);
          })
          .style("fill", function(d, i) {
            return colors(i);
          })
          .attr("width", function(d) {
            return xscale(d);
          });

        function repaintChart() {
          console.log(data)
          canvas.selectAll('rect')
            .data(data)
            .transition()
            .duration(800)
            .attr("width", function(d) {
              return xscale(d);
            })
        }
       function clicked(d){
          console.log(d.data)
        }
      }
    }
  });

