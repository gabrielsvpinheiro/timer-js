let sec = 0
let min = 0
let hour = 0
let interval

function twoDigits(number) {
    if(number < 10) {
        return '0' + number;
    }
    return number;
}


function start() {
    interval = setInterval(counter, 1000);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById("counter").innerHTML = twoDigits(hour) + ':' + twoDigits(min) + ':' + twoDigits(sec);
}

function counter() {
    sec++;
    if(sec==60) {
        sec = 0;
        min++;
        if(min==60) {
            min = 0;
            hour++;
        }
    }
    document.getElementById("counter").innerHTML = twoDigits(hour) + ':' + twoDigits(min) + ':' + twoDigits(sec);
}