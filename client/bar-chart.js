app.directive('barChart', function($window) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        data: '=',
        tweetVolume: '='
      },
      template: '<div id="bar-chart"></div>',
      link: function(scope, element, attrs, fn) {
  
        // var data = scope.tweetVolume;
        var data = scope;
        var d3 = $window.d3;
        var rawSvg = element;
  
        var colors = d3.scaleOrdinal(d3.schemeCategory20c);
  
        var canvas = d3.select(rawSvg[0])
          .append('svg')
          .attr("width", 300)
          .attr("height", 150);
  
        // watching for any changes in the data
        // if new data is detected, the chart repaint code is run
        scope.$watch('tweetVolume', function(newVal, oldVal) {
          tweetVolume = newVal;
          console.log(JSON.stringify(tweetVolume));
          repaintChart();
        }, true);
        scope.$watch('data', function(newVal, oldVal) {
            scope.data = newVal;
          }, true);

        var xscale = d3.scaleLinear()
          .domain([0, 100])
          .range([0, 240]);

          console.log("objects for scope " + Object.keys(scope));
          console.log("id for scope " + scope.$id);
          console.log("watchers for scope " + scope.$watchers);
          
          console.log("scope tv " + scope.tweetVolume);
        console.log("data " + data);
        console.log("objects for data " + Object.keys(data));
        console.log("data tv " + data.tweetVolume);
        console.log("scope data " + scope.data);
        console.log("len of scope " + JSON.stringify(scope.length));
        console.log("len of data " + JSON.stringify(data.length));

        var yscale = d3.scaleLinear()
        // .domain([0, data.length])
        .domain([0, 5])
        .range([0, 120]);
  
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
  
        // changing the bar widths according to the changes in data
        function repaintChart() {
          canvas.selectAll('rect')
            .data(data)
            .transition()
            .duration(800)
            .attr("width", function(d) {
              return xscale(d);
            })
        }
      }
    }
  });