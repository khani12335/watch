function clock() {
  let day:string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months:string[] = [
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

  let hrs: any = document.getElementById("hours");
  let mint: any = document.getElementById("minutes");
  let sec: any = document.getElementById("second");
  let period: any = document.getElementById("ampm");
  let date: any = document.getElementById("ddmmyy");
  let days: any = document.getElementById("dd");

  let time = new Date();
  let h: number | string = time.getHours();
  let m: number | string = time.getMinutes();
  let s: number | string = time.getSeconds();
  let d: number = time.getDay();
  let dd: number = time.getDate();
  let mm: number = time.getMonth();
  let yy: number = time.getFullYear();

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
