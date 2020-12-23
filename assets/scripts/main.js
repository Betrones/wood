
let resultCount=0;
let currentQuestion=0;

function initTest() {
	document.getElementById('js-helloPage').classList.add('-hidden');
	document.getElementById('js-question').classList.remove('-hidden');

	document.getElementById('js-totalQuestionCount').innerText = questions.length;
	setQuestionData();
};

function setQuestionData() {
	document.getElementById('js-questionText').innerText = questions[currentQuestion].questionText;
	document.getElementById('js-questionNumber').innerText = currentQuestion + 1;
	document.getElementById('js-answers').innerHTML = getAnswersMarkdown(questions[currentQuestion].answers);
};


function getAnswersMarkdown(answers) {
	let result='';

	answers.forEach(answer=> {
		result += 
		'<li>'+
			'<button class="button" onclick="onAnswerClick(' + answer.value + ')">'
				+answer.answerText+
			'</button>'+
		'</li>';
	})

	return result;
};

function onAnswerClick(answerValue){
	resultCount += answerValue;
	currentQuestion++;

	if(currentQuestion < questions.length){
		setQuestionData();
	} else {
		showResult();
	}
};

function showResult(){
	document.getElementById('js-question').classList.add('-hidden');
	document.getElementById('js-result').classList.remove('-hidden')

	let result = 0;

	if (resultCount>12) {
		result = resultData.Bereza
	} else if (resultCount>8){
		result=resultData.Klen
	} else if (resultCount>4){
		result = resultData.Dub
	} else {
		result = resultData.Cash
	}

	document.getElementById('js-resultTitle').innerText=result.Title;
	document.getElementById('resultDescription').innerText=result.Desc;
	document.getElementById('js-resultImage').src=result.Image;

	document.getElementById('js-resultShare').innerHTML=VK.Share.button(
		{
			url: 'https://betrones.github.io/wood/',
			title: result.Title,
			image: 'https://betrones.github.io/wood/'+result.Image,
			noparse: true,
		},
		{
			type: 'round_nocount',
			text: 'Я - единорог'
		}
	);
}

function restartTest(){
	document.getElementById('js-result').classList.add('-hidden');
	document.getElementById('js-question').classList.remove('-hidden');
	resultCount=0;
	currentQuestion=0;
	initTest();
}