$(document).ready(function() {

    var timeLabel = $('#time-label');
    var obj = null;

    setInterval(function() {
        // senter form {"temp":(), "enter":(),"leave":()}

        // server
        // $.ajax({url: 'http://10.32.176.4/Exponential'}).done(function(data) {
        //     // TODO: add information to web
        //     obj = JSON.parse(data);
        // });

        // time
        var date = new Date();
        timeLabel.text(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "   " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    }, 1000);

});
