const secStaff = document.querySelector('.sec');
const minStaff = document.querySelector('.min');
const hourStaff = document.querySelector('.hour');

function itsTime() {
  moveSeconds();
  moveMinutes();
  moveHours();
}

function moveSeconds() {
  const now = new Date();
  const sec = now.getSeconds();
  const secDeg = ((sec / 60) * 360) + 90;
  toggleTransition(secStaff, secDeg);
  secStaff.style.transform = `rotate(${secDeg}deg)`;
}

function moveMinutes() {  
  const now = new Date();
  const min = now.getMinutes();
  const minDeg = ((min / 60) * 360) + 90;  
  toggleTransition(minStaff, minDeg);
  minStaff.style.transform = `rotate(${minDeg}deg)`;
}

function moveHours() {
  const now = new Date();
  const hour = now.getHours();
  const hourDeg = ((hour / 12) * 360) + 90;  
  toggleTransition(hourStaff, hourDeg);
  hourStaff.style.transform = `rotate(${hourDeg}deg)`;
}

function toggleTransition(staff, secDeg) {
  staff.style.transition = "all 0.5s cubic-bezier(0, 2.68, 0.25, 1) 0s";
if (secDeg == 90) staff.style.transition = "none";
}


setInterval(itsTime, 1000);