$(document).ready(function() {

    var timeLabel = $('#time-label');
    var obj = null;
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    setInterval(function() {
        // senter form {"temp":(), "enter":(),"leave":()}

        // server
        // $.ajax({url: 'http://10.32.176.4/Exponential'}).done(function(data) {
        //     // TODO: add information to web
        //     obj = JSON.parse(data);
        // });

        // time
        var date = new Date();
        timeLabel.text(date.getDate() + " " + mS[date.getMonth()] + " " + date.getFullYear() + "   " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    }, 1000);

});
