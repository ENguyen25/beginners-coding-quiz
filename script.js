// list of variables
var startButton = document.querySelector('.start-button');
var timer = document.querySelector('.timer');
var inputInitials = document.querySelector('#student-initials');
var listOfResponses = document.querySelector('.responses');
var submitButton = document.querySelector('.submit-button');
var questions = document.querySelector('.question');
var li1 = document.querySelector('.response-1');
var li2 = document.querySelector('.response-2');
var li3 = document.querySelector('.response-3');
var li4 = document.querySelector('.response-4');
var secondsLeft = 11;
var myQuestions =  [
    {
        question: "What is 10+10",
        a: 20,
        b: 24,
        c: 30,
        d: 21,
        correctAnswer: 20,
    },
    {
        question: "What is 25/5",
        a: 20,
        b: 5,
        c: 30,
        d: 21,
        correctAnswer: 5,
    },
    {
        question: "What is 40+2",
        a: 20,
        b: 24,
        c: 30,
        d: 42,
        correctAnswer: 42,
    }
];

var index = -1;
var numOfCorrectResponses = 0;


// button to start quiz
startButton.addEventListener('click', openQuestions);

// displays quiz questions
function openQuestions () {
    index = index + 1
    
    if (myQuestions[index] === undefined) {
        console.log('Quiz is done');
        return;
    } else {
        questions.textContent = myQuestions[index].question;
            li1.textContent = myQuestions[index].a;
            li2.textContent = myQuestions[index].b;
            li3.textContent = myQuestions[index].c;
            li4.textContent = myQuestions[index].d;
    }
}

// clicking an answer displays the next question
listOfResponses.addEventListener('click', function(event) {
    var response = event.target.textContent;
    
    if (response == myQuestions[index].correctAnswer) {
        numOfCorrectResponses++;
        openQuestions();
    } else {
        openQuestions();
    }
})


// timer
function countdown() {

    var timeInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = 'Time: ' + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
        }

    }, 1000);

}

countdown();

// input initials
function saveInitials(event) {
    var studentInitials = {
        initials: inputInitials.value};
    localStorage.setItem('studentInitials', JSON.stringify(studentInitials));

}
submitButton.addEventListener("click", saveInitials);
