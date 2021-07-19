// list of variables
var startButton = document.querySelector('.start-button');
var questions = document.querySelector('.question');
var li1 = document.querySelector('.response-1');
var li2 = document.querySelector('.response-2');
var li3 = document.querySelector('.response-3');
var li4 = document.querySelector('.response-4');
var myQuestions =  [
    {
        question: "What is 10+10",
        a: 20,
        b: 24,
        c: 30,
        d: 21,
    },
    {
        question: "What is 25/5",
        a: 20,
        b: 24,
        c: 30,
        d: 21,
    },
    {
        question: "What is 40+2",
        a: 20,
        b: 24,
        c: 30,
        d: 21,
    }
];

var number = 1;

// button to start quiz
startButton.addEventListener('click', openQuestions);

// pop up questions
function openQuestions() {
    for (i = 0; i < myQuestions.length; i++) {
        questions.textContent = myQuestions[i].question;
        li1.textContent = myQuestions[i].a;
        li2.textContent = myQuestions[i].b;
        li3.textContent = myQuestions[i].c;
        li4.textContent = myQuestions[i].d;
    }
}

// total correct responses

// timer

// input initials