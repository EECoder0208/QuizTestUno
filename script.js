const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "New York",
            b: "London",
            c: "Paris",
            d: "Berlin"
        },
        correctAnswer: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Venus",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "b"
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');

function loadQuestion() {
    const currentQ = questions[currentQuestion];
    questionEl.textContent = currentQ.question;

    // Clear previous answers
    answersEl.innerHTML = '';

    // Load new answers
    Object.keys(currentQ.answers).forEach(key => {
        const button = document.createElement('button');
        button.textContent = currentQ.answers[key];
        button.value = key;
        button.addEventListener('click', selectAnswer);
        answersEl.appendChild(button);
    });
}

function selectAnswer(e) {
    const buttons = answersEl.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
    if (e.target.value === questions[currentQuestion].correctAnswer) {
        score++;
    }
    submitBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        submitBtn.style.display = 'none';
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.style.display = 'none';
    resultEl.textContent = `You scored ${score} out of ${questions.length}!`;
}

submitBtn.addEventListener('click', nextQuestion);

// Start the quiz
loadQuestion();