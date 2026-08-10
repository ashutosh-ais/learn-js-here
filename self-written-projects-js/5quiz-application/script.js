document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      marks: 10,
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      marks: 5,
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
      marks: 10,
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", nextQuestion);

  restartBtn.addEventListener("click", restartQuiz);

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions?.length) {
      showQuestion();
    } else {
      showResult();
    }
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; // clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice, index) => {
      const li = document.createElement("li");
      li.setAttribute("data-index", index);
      li.textContent = choice;
      choicesList.appendChild(li);
      li.addEventListener("click", (e) => {
        console.log("li -> ", li);
        selectAnswer(choice, li);
      });
    });
  }

  choicesList.addEventListener("click", (e) => {
    const listItems = document.querySelectorAll("#choices-list li");
    const selectedAnswerIndex = parseInt(e.target.dataset.index);
    listItems.forEach((item, index) => {
      //   if (index === selectedAnswerIndex) {
      //     item.classList.add("selected-choice");
      //   } else {
      //     item.classList.remove("selected-choice");
      //   }
      item.classList.remove("selected-choice");
    });
    listItems[selectedAnswerIndex].classList.add("selected-choice");
  });

  function selectAnswer(choice, li) {
    const correctAnswer = questions[currentQuestionIndex]?.answer;
    const correctAnswerMarks = questions[currentQuestionIndex]?.marks;
    if (choice === correctAnswer) {
      score += correctAnswerMarks;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    const totalMarks = questions?.reduce((acc, curr) => {
      return acc + curr?.marks;
    }, 0);
    debugger;
    scoreDisplay.textContent = `${score} out of ${totalMarks}`;
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  }
});
