//Variables
var headerEvent = document.getElementById("page-title");
var inputField = document.getElementById("keypress-input");
var outPutField = document.getElementById("output-target");
var guineaPig = document.getElementById("guinea-pig");
var addColor = document.getElementById("add-color");
var hulkify = document.getElementById("make-large");
var addBorder = document.getElementById("add-border");
var rounding = document.getElementById("add-rounding");
var sections = document.getElementsByClassName("article-section");
var buttons = document.getElementsByTagName("button");

//Event Listeners
//if the mouse if over the header output 1st function
//if the the mouse leaves the header then function 2 runs
headerEvent.addEventListener("mouseover", function (event) {
		outPutField.innerHTML = "You moved your mouse over the header.";
});
headerEvent.addEventListener("mouseleave", function (event) {
		outPutField.innerHTML = "You left me!";
});
//section click- if the section is clicked, notify in the output field that the user clicked on that section
for(var i = 0; i < sections.length; i++ ) {
	sections[i].addEventListener("click", function(event) {
		outPutField.innerHTML = "You clicked on, " + event.target.innerHTML;
	});
};
//mirroring the input in the output field using event listener
//problem-question for instructor: why does this output character from the previous keypress and not the current?
inputField.addEventListener("keypress", function (event) {
	outPutField.innerHTML = inputField.value;
});
//event listeners for the buttons
addColor.addEventListener("click", makeItColorful);
hulkify.addEventListener("click", makeItBig);
addBorder.addEventListener("click", giveItBorder);
rounding.addEventListener("click", roundItOut);

//functions
function makeItColorful () {
	guineaPig.style.color = 'blue';
}
function makeItBig () {
	guineaPig.style.fontSize = '3em';
}
function giveItBorder () {
	guineaPig.style.border = '1px solid black';
}
function roundItOut () {
	guineaPig.style.borderRadius = '15%';
}

//styling
sections[0].style.fontWeight = 'bold';
sections[5].style.fontWeight = 'bold';
sections[5].style.fontStyle = 'italic';
buttons[0].style.display = 'block';
buttons[1].style.display = 'block';
buttons[2].style.display = 'block';
buttons[3].style.display = 'block';
