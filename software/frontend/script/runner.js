var obj = null;
$(document).ready(function() {

    var timeLabel = $('#time-label');
    var obj = null;
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    var currentID = "";

    setInterval(function() {
        // senter form {"temp":(), "enter":(),"leave":()}

        // server
        $.ajax({url: 'http://10.32.176.4/Exponential'}).done(function(data) {
            // TODO: add information to web
            obj = JSON.parse(data)[0];
            if (obj.id != currentID) {
            var d = new Date();
            var time = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
            $('#table').append('<tr><td style>' + time + '<\/td> <td style>' + obj.temp + '<\/td> <td style>' + obj.sound + '<\/td><td style>' + calWarning(calStatus(obj)) + '<\/td></tr>');
            }
            currentID = obj.id;
        });
        // time
        var date = new Date();
        $('#time-label').text(date.getDate() + " " + mS[date.getMonth()] + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    }, 1000);

var calWarning = function(sum) {
    if (sum < 30) {
        return "Awake";
    } else if (sum < 65) {
        return "Few sleep";
    } else if (sum < 100) {
        return "Sleep well";
    }
}

});
