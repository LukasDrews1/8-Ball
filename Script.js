const Answer = document.getElementById("Answer");
const Input = document.getElementById("Input-style");
const Enter = document.getElementById("Enter");
const Sunrise = document.getElementById("Sunrise");
const Moonrise = document.getElementById("Moonrise");

let Answers = ["Yes", "No", "it's not likely", "It seems to be"];

Enter.addEventListener('click', function(){
    let RandomAnswers = Math.floor(Math.random() * 4);
	Input.value = "";
    Answer.innerHTML = Answers[RandomAnswers];
});