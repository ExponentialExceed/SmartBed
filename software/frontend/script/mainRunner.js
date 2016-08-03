var obj = null;
var currentID = "";
var timeLabel = $('#time-label');
var i = 0;

$(document).ready(function() {
    setInterval(function() {
        // server
        $.ajax({url: 'http://10.32.176.4/Exponential/'}).done(function(data) {
            obj = JSON.parse(data);
            if (obj.id != currentID) {
              var k = 0;
              var data = [];
              console.log(obj);
              setTimeout(function() {
                data.push(calStatus(obj));
                k++;
              }, 1000);
              while(k<12){
                data.push(calStatus(obj));
                k++;
              }
              set(data,12);
            }
            currentID = obj.id;
        });

        // time
        var date = new Date();
        timeLabel.text(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "   " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    }, 1000);
});


// 0-17, 0 is 0% and 17 is 100%
var calStatus = function(obj) {
    // no sleep
    if (obj.motion) {
        if (checkSound(obj.sound) == 4) {
            if (checkTemp(obj.temp) == 4) {
                return 0;
            } else if (checkTemp(obj.temp) == 3) {
                return 5.9;
            } else if (checkTemp(obj.temp) == 2) {
                return 11.8;
            } else if (checkTemp(obj.temp) == 1) {
                return 17.6;
            }
        } else if (checksound(obj.temp) == 3) {
            if (checkTemp(obj.temp) == 4) {
                return 23.5;
            } else if (checkTemp(obj.temp) == 3) {
                return 29.4;
            } else if (checkTemp(obj.temp) == 2) {
                return 35.3;
            } else if (checkTemp(obj.temp) == 1) {
                return 41.2;
            }
        } else if (checksound(obj.temp) == 2) {
            if (checkTemp(obj.temp) == 4) {
                return 47.1;
            } else if (checkTemp(obj.temp) == 3) {
                return 53.0;
            } else if (checkTemp(obj.temp) == 2) {
                return 58.9;
            } else if (checkTemp(obj.temp) == 1) {
                return 64.7;
            }
        } else if (checksound(obj.temp) == 1) {
            if (checkTemp(obj.temp) == 4) {
                return 70.5;
            } else if (checkTemp(obj.temp) == 3) {
                return 76.4;
            } else if (checkTemp(obj.temp) == 2) {
                return 82.3;
            } else if (checkTemp(obj.temp) == 1) {
                return 88.2;
            }
        }
    } else {
        return 100;
    }

    obj.motion; // boolean !
    obj.sound; //  boolean !
    obj.temp; // value !
}

var checkTemp = function(value) {
    // cool
    if (value < 20) {
        return 1;
        // normal
    } else if (value < 27) {
        return 2;
        // hot
    } else if (value < 36) {
        return 3;
    } else {
        return 4;
    }
}

var checkSound = function(value) {
    // cool
    if (value < 40) {
        return 1;
        // normal
    } else if (value < 65) {
        return 2;
        // hot
    } else if (value < 80) {
        return 3;
    } else {
        return 4;
    }
}
