"use strict";
function displayTime(){
    let D = new Date();
    let hrs = D.getHours();
    let min = D.getMinutes();
    let sec = D.getSeconds();
    let ampm = document.getElementById('ampm');

    if(hrs >= 12){
        ampm.innerHTML = 'PM';
    }else{
        ampm.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    if(hrs < 10){
        hrs = "0" + hrs;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 1000);
