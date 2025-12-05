let score = 0;
let currentQuestion = 0;
let lives = 3;

const viesDiv = document.getElementById("vies");
const questions = document.querySelectorAll(".question");
const resultatDiv = document.getElementById("resultat");

// true = Oui correct, false = Non correct
const reponses = [true, false, true, false, true];

function updateLives() {
  viesDiv.textContent = "❤️".repeat(lives);
}

function verifier(reponse, btn) {
  if (reponse === reponses[currentQuestion]) {
    score++;
    btn.style.background = "#4caf50"; // vert pour correct
  } else {
    lives--;
    btn.style.background = "#c0392b"; // rouge pour incorrect
  }

  // désactiver les boutons et marquer question comme répondue
  questions[currentQuestion].style.opacity = "0.5";
  questions[currentQuestion]
    .querySelectorAll("button")
    .forEach((b) => (b.disabled = true));

  currentQuestion++;
  updateLives();

  if (lives <= 0) {
    resultatDiv.innerHTML = `<h2>Game Over 😢</h2><p>Score: ${score} / ${reponses.length}</p>`;
    questions.forEach((q) =>
      q.querySelectorAll("button").forEach((b) => (b.disabled = true))
    );
  } else if (currentQuestion === questions.length) {
    resultatDiv.innerHTML = `<h2>Quiz terminé 🎉</h2><p>Score: ${score} / ${reponses.length}</p>`;
  }
}
