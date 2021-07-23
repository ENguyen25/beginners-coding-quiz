// list of variables
var startButton = document.querySelector('.start-button');
var submitButton = document.querySelector('.submit-button');
var viewScores = document.querySelector('.view-highscores');
var backButton = document.querySelector('.back-button');
var clearButton = document.querySelector('.clear-button');
var timer = document.querySelector('.timer');
var inputInitials = document.querySelector('#student-initials');
var listOfResponses = document.querySelector('.responses');
var questions = document.querySelector('.question');
var li1 = document.querySelector('.response-1');
var li2 = document.querySelector('.response-2');
var li3 = document.querySelector('.response-3');
var li4 = document.querySelector('.response-4');
var showScores = document.querySelector('.render-high-scores');
var secondsLeft = 76;
var myQuestions =  [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: '1. JavaScript',
        b: '2. terminal / bash',
        c: '3. for loops',
        d: '4. console.log',
        correctAnswer: '4. console.log',
    },
    {
        question: "Commonly used data types DO NOT include:",
        a: '1. strings',
        b: '2. booleans',
        c: '3. alerts',
        d: '4. numbers',
        correctAnswer: '3. alerts',
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        a: '1. quotes',
        b: '2. curly brackets',
        c: '3. parentheses',
        d: '4. square brackets',
        correctAnswer: '3. parentheses',
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        a: '1. numbers and strings',
        b: '2. other arrays',
        c: '3. booleans',
        d: '4. all of the above',
        correctAnswer: '4. all of the above',
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        a: '1. commas',
        b: '2. curly brackets',
        c: '3. quotes',
        d: '4. parentheses',
        correctAnswer: '3. quotes',
    },
    {
        question: "What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?",
        a: '1. <embed>',
        b: '2. <caption>',
        c: '3. <!DOCTYPE>',
        d: '4. <code>',
        correctAnswer: '3. <!DOCTYPE>',
    },
    {
        question: "What tag is used to define an image - or add an image - to an HTML page?",
        a: '1. <img>',
        b: '2. <div>',
        c: '3. <meta>',
        d: '4. <table>',
        correctAnswer: '1. <img>',
    },
    {
        question: "What is the name of the property used to specify the effects displayed behind all elements on a page?",
        a: '1. Transparency',
        b: '2. Bottom layer',
        c: '3. Background',
        d: '4. Border',
        correctAnswer: '3. Background',
    },
    {
        question: "CSS stands for _____ Style Sheets.",
        a: '1. Concave',
        b: '2. Cascading',
        c: '3. Concept',
        d: '4. Curious',
        correctAnswer: '2. Cascading',
    },
    {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        a: '1. Arrays',
        b: '2. Functions',
        c: '3. Variables',
        d: '4. Strings',
        correctAnswer: '1. Arrays',
    }
];

var index = -1;
var numOfCorrectResponses = 0;


// button to start quiz
startButton.addEventListener('click', function () {
    document.querySelector('.list-of-questions').classList.toggle('hidden');
    document.querySelector('.start-quiz').classList.toggle('hidden');
    secondsLeft = 76;
    countdown();
    openQuestions();
});

// displays quiz questions
function openQuestions () {

    index = index + 1
    
    if (myQuestions[index] === undefined) {
        document.querySelector('.input-initials').classList.toggle('hidden');
        document.querySelector('.list-of-questions').classList.toggle('hidden');
        // document.querySelector('.timer').classList.toggle('hidden');
        document.getElementById('saved-grade').innerHTML = numOfCorrectResponses;
        saveHighScores();
        numOfCorrectResponses = 0;
        index = -1;        
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
        secondsLeft = secondsLeft-10;
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
            document.querySelector('.input-initials').classList.toggle('hidden');
            document.querySelector('.list-of-questions').classList.toggle('hidden');
            // document.querySelector('.timer').classList.toggle('hidden');
            document.getElementById('saved-grade').innerHTML = numOfCorrectResponses;
            saveHighScores(); 
        } else if (myQuestions[index] === undefined) {
            clearInterval(timeInterval);
        }

    }, 1000);

}

// input initials
function saveInitials(event) {
    event.preventDefault();
    var studentInitials = {
        initials: inputInitials.value};
    localStorage.setItem('studentInitials', JSON.stringify(studentInitials));
    document.querySelector('.input-initials').classList.toggle('hidden');
    document.querySelector('.show-high-scores').classList.toggle('hidden');
    timer.textContent = "Time: 0";
    renderHighScores();
}

function saveHighScores() {
    var highScores = {
        scores: numOfCorrectResponses};
    console.log(highScores);
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function renderHighScores() {
    var studentInitials = JSON.parse(localStorage.getItem("studentInitials"));
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    showScores.textContent = studentInitials.initials + " - " + highScores.scores;
}

submitButton.addEventListener('click', saveInitials);

viewScores.addEventListener('click', function() {
    renderHighScores();
    document.querySelector('.show-high-scores').classList.toggle('hidden');
    document.querySelector('.start-quiz').classList.toggle('hidden');
});

backButton.addEventListener('click', function() {
    document.querySelector('.start-quiz').classList.toggle('hidden');
    document.querySelector('.show-high-scores').classList.toggle('hidden');
});

clearButton.addEventListener('click', function() {
    document.querySelector('.render-high-scores').classList.toggle('hidden');
})