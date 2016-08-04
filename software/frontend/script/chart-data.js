var warning = $('#warining-div');
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100)
};
var lineChartData = {
    labels: [
        "Hour: 1",
        "Hour: 2",
        "Hour: 3",
        "Hour: 4",
        "Hour: 5",
        "Hour: 6",
        "Hour: 7",
        "Hour: 8",
        "Hour: 9",
        "Hour: 10",
        "Hour: 11",
        "Hour: 12"
    ],
    datasets: [
        {
            label: "sleep",
            fillColor: "rgba(48, 164, 255, 0.135)",
            strokeColor: "rgba(48, 164, 255, 1)",
            pointColor: "rgba(48, 164, 255, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(48, 164, 255, 1)",
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }
    ]
};

var setdata = function(obj, value) {
    var date = new Date();

    lineChartData.labels = countHour(value);
    lineChartData.datasets = [
        {
            label: "Sleep",
            fillColor: "rgba(48, 164, 255, 0.135)",
            strokeColor: "rgba(48, 164, 255, 1)",
            pointColor: "rgba(48, 164, 255, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(48, 164, 255, 1)",
            data: obj
        }
    ];

    warning.text(calWarning(obj));
}

var calWarning = function(obj) {
    var aveage = 0;
    for (var i = 0; i < obj.length; i++) {
        aveage += obj[i];
    }
    var sum = aveage / obj.length;
    if (sum < 30) {
        return "Least sleep";
    } else if (sum < 65) {
        return "Few sleep";
    } else if (sum < 100) {
        return "Enough sleep";
    }
}

var countHour = function(value) {
    var array = [];
    for (var i = 0; i < value; i++) {
        array.push("Hour: " + (i + 1));
    }
    return array;
}
var set = function(obj, value) {
    setdata(obj, value);
    var chart1 = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(chart1).Line(lineChartData, {responsive: true});
}
window.onload = function() {
    var chart1 = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(chart1).Line(lineChartData, {responsive: true});
};
