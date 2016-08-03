var obj = null;
$(document).ready(function() {

    var timeLabel = $('#time-label');
    var obj = null;

    var currentID = "";

    setInterval(function() {
        // senter form {"temp":(), "enter":(),"leave":()}

        // server
        $.ajax({url: 'http://10.32.176.4/Exponential'}).done(function(data) {
            // TODO: add information to web
            obj = JSON.parse(data);
            var table = $("#table");
            if (obj.id != currentID) {
                for (var i = 0; i < obj.length; i++) {
                    table.append('<tr><td style>' + obj[i].time + '<\/td> <td style>' + obj[i].temp + '<\/td> <td style>' + obj[i].snore + '<\/td><td style>' + obj[i].humid + '<\/td><td style>' + obj[i].status + '<\/td></tr>');
                }
            }
            currentID = obj.id;
        });

        // time
        var date = new Date();
        timeLabel.text(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "   " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    }, 1000);

});
