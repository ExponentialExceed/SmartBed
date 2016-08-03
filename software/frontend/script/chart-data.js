var randomScalingFactor = function() {
    return Math.round(Math.random() * 1000)
};
var lineChartData = {
  labels: [1,2,3,4,5,6,7,8,9,12],
  datasets: [{
    label: "sleep",
    fillColor: "rgba(48, 164, 255, 0.2)",
    strokeColor: "rgba(48, 164, 255, 1)",
    pointColor: "rgba(48, 164, 255, 1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(48, 164, 255, 1)",
    data: []
  }
  ]
};

var setdata = function(obj, value) {
  var date = new Date();

  lineChartData.labels = countHour(value);
  lineChartData.datasets = [{
        label: "My Second dataset",
        fillColor: "rgba(48, 164, 255, 0.2)",
        strokeColor: "rgba(48, 164, 255, 1)",
        pointColor: "rgba(48, 164, 255, 1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(48, 164, 255, 1)",
        data: obj
    }];
}

var countHour = function(value) {
    var array = [];
    for (var i = 0; i < value; i++) {
        array.push("Hour: " + (i + 1));
    }
    return array;
}
var set = function(obj, value){
  setdata(obj,value);
  var chart1 = document.getElementById("line-chart").getContext("2d");
  window.myLine = new Chart(chart1).Line(lineChartData, {responsive: true});
}
window.onload = function() {
    var chart1 = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(chart1).Line(lineChartData, {responsive: true});

};
