let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

// Function append the relative <li> item
function appendLi(li) {
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
}

// Function append the relative <button> item to the parent <li>
function appendBtn(btn, li) {
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
}

// Function toggle the relative <li> item
function toggleEl(li) {
	li.addEventListener("click", function() {
		li.classList.toggle("done"); 
	});
}

// Function delete the relative <li> item
function removeEl(btn, li) {	
	btn.addEventListener("click", function() {
		li.remove();
	});
}

// Function return the lenght of the input value (string/text)
function inputLength() {
	return input.value.length;
}

// Main body
function createListElement() {
	let li = document.createElement("li");
	let btn = document.createElement("button");
	appendLi(li);
	appendBtn(btn, li);
	toggleEl(li);
	removeEl(btn, li);
	input.value = "";
}

// Add a list-item if click 'Enter'
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// Add a list-item if press 'Enter'
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);