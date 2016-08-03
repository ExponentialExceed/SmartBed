var timeLabel = $('#time-label');

var obj = null;

setInterval(function() {
    // senter form {"temp":(), "enter":(),"leave":()}

    // server
    $.ajax({url: 'http://10.32.176.4/Exponential'}).done(function(data) {
        // TODO: add information to web
        obj = JSON.parse(data);
        updateSeat();
        temperatureLabel.text(obj.temp + "°C");
    });

    // time
    var date = new Date();
    timeLabel.text("Time: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    timeLabel.text("Date: " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear());
}, 1000);
