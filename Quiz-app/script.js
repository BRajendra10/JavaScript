const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: 0
    },
    {
      question: "Which HTML element is used to define the title of a document?",
      options: ["<meta>", "<title>", "<head>", "<h1>"],
      answer: 1
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<line>"],
      answer: 1
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image?",
      options: ["title", "alt", "src", "href"],
      answer: 1
    },
    {
      question: "Which HTML element is used to create an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: 0
    },
    {
      question: "Which tag is used to define a table row in HTML?",
      options: ["<tr>", "<td>", "<th>", "<table>"],
      answer: 0
    },
    {
      question: "How can you make a numbered list in HTML?",
      options: ["<dl>", "<ol>", "<ul>", "<list>"],
      answer: 1
    },
    {
      question: "Which tag is used to make text bold in HTML?",
      options: ["<i>", "<b>", "<strong>", "<bold>"],
      answer: 1
    },
    {
      question: "What is the correct HTML element for the largest heading?",
      options: ["<heading>", "<h6>", "<h1>", "<head>"],
      answer: 2
    },
    {
      question: "What is the correct way to create a hyperlink in HTML?",
      options: ["<a url='https://example.com'>Link</a>", "<a href='https://example.com'>Link</a>", "<link src='https://example.com'>Link</link>", "<href='https://example.com'>Link</href>"],
      answer: 1
    }  
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 60;

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
  startTimer();
}

function startTimer() {
  timeLeft = 60;
  timerEl.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => selectAnswer(idx));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(selected) {
  clearInterval(timer);
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    startTimer();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  scoreEl.textContent = score;
}
