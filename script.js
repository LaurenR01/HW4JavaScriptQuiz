// function to display the quiz
function displayQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="slide">
                <div class="question"> ${currentQuestion.question}</div>
                <div class ="answers"> ${answers.join("")}
                </div></div>`
            );
        }
    );
    quizBox.innerHTML = output.join('');
}
// function to display the results
function displayResults(){
    const answerBoxes = quizBox.querySelectorAll('.answers');
    let numberCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerBoxes = answerBoxes[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const guess = (answerBoxes.querySelector(selector) || {}).value;

        if(guess === currentQuestion.correctAnswer){
            numberCorrect++;
            answerBoxes[questionNumber].style.color = 'lightgreen';}
        else{
            answerBoxes[questionNumber].style.color = 'red';
        }
    
    });
    showResults.innerHTML = `${numberCorrect} out of ${myQuestions.length}`;
};
// function to show a slide
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        previousBtn.style.display = 'none';}
    else{
        previousBtn.style.display = 'inline-block';
    }
    if (currentSlide === slides.length-1){
        nextBtn.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else{
        nextBtn.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}
// function to switch to next slide
function showNextSlide(){
    showSlide(currentSlide + 1);
}
// function to switch to previous slide
function showPreviousSlide(){
    showSlide(currentSlide - 1);
}
// list of variables
const quizBox = document.getElementById('quiz');
const showResults = document.getElementById('results');
const submitButton = document.getElementById('submit');
// const answerBoxes = quizBox.querySelectorAll('.answers');
let numberCorrect = 0;

// Questions and answers taken from W3schools JavaScript Quiz.  Link in README
const myQuestions = [
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
displayQuiz();

// Pagination Code
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

// Event Listeners
submitButton.addEventListener('click', displayResults);
previousBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);
