const Answer = document.getElementById("Answer");
const Input = document.getElementById("Input-style");
const Enter = document.getElementById("Enter");

let Answers = ["Yes", "No", "it's not likely", "It seems to be"];
let RandomAnswers = Math.floor(Math.random() * 4) + 1;

Enter.addEventListener('click', function(){
	Input.value = "";
    Answer.innerHTML = Answers[RandomAnswers];
    console.log(RandomAnswers);
});