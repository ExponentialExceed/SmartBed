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