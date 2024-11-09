"use strict";
function clock() {
    let day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let months = [
        "January",
        "Februray",
        "March",
        "April",
        "May",
        "June",
        "july",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let hrs = document.getElementById("hours");
    let mint = document.getElementById("minutes");
    let sec = document.getElementById("second");
    let period = document.getElementById("ampm");
    let date = document.getElementById("ddmmyy");
    let days = document.getElementById("dd");
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    let ampm = h <= 12 ? "PM" : "AM";
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h;
    mint.innerHTML = m;
    sec.innerHTML = s;
    period.innerHTML = ampm;
    days.innerHTML = day[d];
    date.innerHTML = months[mm] + " " + dd + "," + yy;
}
setInterval(clock, 1000);
