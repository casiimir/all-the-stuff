let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let container = document.querySelector(".container");
let h4 = document.querySelector("h4");

// Make a function 'setGradient' that set the background-color
function setGradient() {
  container.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h4.textContent = container.style.background;
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);