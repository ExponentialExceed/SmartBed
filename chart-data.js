var randomScalingFactor = function() {
    return Math.round(Math.random() * 100)
};

var lineChartData = {
    labels: [],
    datasets: []
}

var setChartInfo = function(obj, value) {
  console.log(obj);
    lineChartData.labels = countHour(value);
    lineChartData.datasets = [
        {
            label: "My Second dataset",
            fillColor: "rgba(48, 164, 255, 0.2)",
            strokeColor: "rgba(48, 164, 255, 1)",
            pointColor: "rgba(48, 164, 255, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(48, 164, 255, 1)",
            data: obj
        }
    ]
}

var countHour = function(value) {
    var array = [];
    for (var i = 0; i < value; i++) {
        array.push("Hour: " + (i + 1));
    }
}

window.onload = function() {
    var chart1 = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(chart1).Line(lineChartData, {responsive: true});

};
