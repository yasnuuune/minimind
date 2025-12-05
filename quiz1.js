// ===== Quiz 1 JS – IA =====
let currentQuestion = 0;
let score = 0;
let lives = 3;

const questions = [
  { q: "L'IA peut reconnaître des visages ?", answer: true },
  { q: "L'IA peut écrire des poèmes comme les humains ?", answer: true },
  {
    q: "Une IA symbolique apprend toute seule en regardant des exemples ?",
    answer: false,
  },
];

const viesDiv = document.getElementById("vies");
const resultatDiv = document.getElementById("resultat");
const questionDivs = document.querySelectorAll(".question");

// Hide all questions except the first one
questionDivs.forEach((q, i) => {
  if (i !== 0) q.style.display = "none";
});

function updateLives() {
  viesDiv.textContent = "❤️".repeat(lives);
}

function verifier(reponse, btn) {
  const q = questions[currentQuestion];

  // Disable all buttons for current question
  const buttons = btn.parentElement.querySelectorAll("button");
  buttons.forEach((b) => (b.disabled = true));

  if (reponse === q.answer) {
    score++;
    btn.style.background = "#4caf50"; // green for correct
  } else {
    lives--;
    btn.style.background = "#c0392b"; // red for wrong
  }

  updateLives();

  setTimeout(() => {
    // Hide current question
    questionDivs[currentQuestion].style.display = "none";
    currentQuestion++;

    if (lives <= 0) {
      resultatDiv.innerHTML = `<h2>Game Over 😢</h2><p>Score : ${score} / ${questions.length}</p>`;
      return;
    }

    if (currentQuestion >= questions.length) {
      resultatDiv.innerHTML = `<h2>Quiz terminé 🎉</h2><p>Score : ${score} / ${questions.length}</p>`;
      return;
    }

    // Show next question
    questionDivs[currentQuestion].style.display = "block";
  }, 500);
}

// Initial lives display
updateLives();
