// 0-17, 0 is 0% and 17 is 100%
var calStatus = function(obj) {
    // no sleep
    if (!obj.motion) {
        if (checkSound(obj.sound) == 4) {
            if (checkTemp(obj.temp) == 4) {
                return 100;
            } else if (checkTemp(obj.temp) == 3) {
                return 88.2;
            } else if (checkTemp(obj.temp) == 2) {
                return 82.3;
            } else if (checkTemp(obj.temp) == 1) {
                return 76.4;
            }
        } else if (checkSound(obj.sound) == 3) {
            if (checkTemp(obj.temp) == 4) {
                return 70.5;
            } else if (checkTemp(obj.temp) == 3) {
                return 64.7;
            } else if (checkTemp(obj.temp) == 2) {
                return 58.9;
            } else if (checkTemp(obj.temp) == 1) {
                return 53.0;
            }
        } else if (checkSound(obj.sound) == 2) {
            if (checkTemp(obj.temp) == 4) {
                return 47.1;
            } else if (checkTemp(obj.temp) == 3) {
                return 41.2;
            } else if (checkTemp(obj.temp) == 2) {
                return 35.3;
            } else if (checkTemp(obj.temp) == 1) {
                return 29.4;
            }
        } else if (checkSound(obj.sound) == 1) {
            if (checkTemp(obj.temp) == 4) {
                return 23.5;
            } else if (checkTemp(obj.temp) == 3) {
                return 17.6;
            } else if (checkTemp(obj.temp) == 2) {
                return 11.8;
            } else if (checkTemp(obj.temp) == 1) {
                return 5.9;

            }
        }
    } else {
        return 0;
    }
}

var checkTemp = function(value) {
    // cool
    if (value < 20) {
        return 4;
        // normal
    } else if (value < 22) {
        return 3;
        // hot
    } else if (value < 25) {
        return 2;
    } else {
        return 1;
    }
}

var checkSound = function(value) {
    // cool
    if (value < 20) {
        return 4;
        // normal
    } else if (value < 35) {
        return 3;
        // hot
    } else if (value < 50) {
        return 2;
    } else {
        return 1;
    }
}
