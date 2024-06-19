let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  hr_rotation = 30 * h + m / 2;
  min_rotation = 6 * m;
  sec_rotation = 6 * s;

  hours.style.transform = `rotate(${hr_rotation}deg)`;
  minutes.style.transform = `rotate(${min_rotation}deg)`;
  seconds.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
