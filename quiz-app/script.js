const quizData = [
  {
    question: "How old is Unnati?",
    a: "10",
    b: "23",
    c: "24",
    d: "35",
    correct: "b",
  },
  {
    question: "Most used programming language in 2019?",
    a: "Java",
    b: "C++",
    c: "JavaScript",
    d: "Python",
    correct: "a",
  },
  {
    question: "Who is the President of India?",
    a: "Narendra Modi",
    b: "Ramnath Kovind",
    c: "Atal Bihair Vajpayee",
    d: "Joe Biden",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hyperlink Markup Language",
    c: "Hypertext Marking Language",
    d: "NA",
    correct: "a",
  },
  {
    question: "How old is JavaScript?",
    a: "1995",
    b: "1996",
    c: "1994",
    d: "NA",
    correct: "d",
  },
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let currentQuestion = 0;
let answer = undefined;
let score = 0;
loadQuiz();

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deSelectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function loadQuiz() {
  deSelectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submit.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      alert("You have completed the quiz");
      quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions correctly!</h2> 
      <button onClick="location.reload()">Reload</button>`;
    }
  }
});
