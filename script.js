const quizBox = document.getElementById('quiz');
const showResults = document.getElementById('results');
const submitButton = document.getElementById('submit');

function displayQuiz(){};

function displayResults(){};

displayQuiz();

submitButton.addEventListener('click', displayResults);
// Questions and answers taken from W3schools JavaScript Quiz.  Link in README
const questionArray = [
    {
        question: "Inside which HTML element do we put Javascript?",
        answers: {
            a: "<js>",
            b: "<scripting>",
            c: "<javascript>",
            d: "<script>",
        },
        correctAnswer: "d"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "The <head> section",
            b: "Both the <head> section and the <body> section are correct",
            c: "The <body> section",
        },
        correctAnswer: "b"
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answers: {
            a: "msgBox(\"Hello World\");",
            b: "alertBox(\"Hello World\");",
            c: "alert(\"Hello World\");",
            d: "msg(\Hello World\");",
         },
         correctAnswer: "c"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            a: "function:myFunction()",
            b: "function myFunction()",
            c: "function = myFunction()",
        },
        correctAnswer: "b"
    },
    {
        question: "How do you call a function named \"myFunction\"?",
        answers:{
            a: "call myFunction()",
            b: "call function myFunction()",
            c: "myFunction()",
        },
        correctAnswer: "c"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: "//This is a comment",
            b: "<!--This is a comment-->",
            c: "'This is a comment",
        },
        correctAnswer: "a"
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: {
            a: "Math.rnd(7.25)",
            b: "rnd(7.25)",
            c: "round(7.25)",
            d: "Math.round(7.25)",
        },
        correctAnswer: "d"
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: {
            a: "Math.max(x,y)",
            b: "top(x,y)",
            c: "Math.ceil(x,y)",
            d: "ceil(x,y)",
        },
        correctAnswer: "a"
    },
    {
        question: "JavaScript is the same as Java.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: "b"
    
    },
    {
        question: "Which event occurs when the user clicks on an HTML elememnt?",
        answers: {
            a: "onmouseclick",
            b: "onclick",
            c: "onchange",
            d: "onmouseover",
        },
        correctAnswer: "b"
    }
]