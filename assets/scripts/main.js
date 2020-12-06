
let resultCount=0;
let currentQuestion=0;

initTest();

function initTest() {
	document.getElementById('js-totalQuestionCount').innerText = questions.length;
	setQuestionData();
}

function setQuestionData() {
	document.getElementById('js-questionText').innerText = questions[currentQuestion].questionText;
	document.getElementById('js-questionNumber').innerText = currentQuestion + 1;
	document.getElementById('js-answers').innerHTML = getAnswersMarkdown(questions[currentQuestion].answers);
}


function getAnswersMarkdown(answers) {
	let result='';

	answers.forEach(answer=> {
		result = result + '<li><button class="button">'+answer.answerText+'</li></button>';
	})

	return result;
}