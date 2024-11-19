//your JS code here. If required.
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const allCircles = document.querySelectorAll('.circle');
const allLines = document.querySelectorAll('.line');
let currentCircle = 0;
let currentLine = 0;

function next() {
	if(currentCircle < 4) {
		currentCircle++;
		// console.log(currentCircle);
		allCircles[currentCircle].classList.add('active');
		allLines[currentLine].classList.add('active-line');
		currentLine++;
	}
 	if(currentCircle == 4) {
		nextBtn.setAttribute('disabled', true);
		nextBtn.classList.add('disabled');
	}
	if(currentCircle > 0) {
		prevBtn.removeAttribute('disabled');
		prevBtn.classList.remove('disabled');
	}
}

function prev() {
	if(currentCircle > 0) {
		allCircles[currentCircle].classList.remove('active');
		currentCircle--;
		currentLine--;
		allLines[currentLine].classList.remove('active-line');
		// console.log(currentCircle);
	}
	if(currentCircle < 4) {
		nextBtn.removeAttribute('disabled');
		nextBtn.classList.remove('disabled');
	}
	if(currentCircle == 0) {
		prevBtn.setAttribute('disabled', true);
		prevBtn.classList.add('disabled');
	}
}

