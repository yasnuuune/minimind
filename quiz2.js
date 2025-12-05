let score = 0;
let currentQuestion = 0;
let lives = 3;

const viesDiv = document.getElementById("vies");
const questions = document.querySelectorAll(".question");
const resultatDiv = document.getElementById("resultat");

// Correct answers: true = Oui, false = Non
const reponses = [true, true, true, false, true, true, true, true, true, false];

function updateLives() {
    viesDiv.textContent = "❤️".repeat(lives);
}

function verifier(reponse, btn) {
    if (reponse === reponses[currentQuestion]) {
        score++;
        btn.style.background = "#4caf50"; // green for correct
    } else {
        lives--;
        btn.style.background = "#c0392b"; // red for wrong
    }

    questions[currentQuestion].style.opacity = "0.5"; // visually mark answered
    questions[currentQuestion].querySelectorAll("button").forEach(b => b.disabled = true);

    currentQuestion++;

    updateLives();

    if (lives <= 0) {
        resultatDiv.innerHTML = `<h2>Game Over 😢</h2><p>Score: ${score} / ${reponses.length}</p>`;
        // disable all remaining questions
        questions.forEach(q => q.querySelectorAll("button").forEach(b => b.disabled = true));
    } else if (currentQuestion === questions.length) {
        resultatDiv.innerHTML = `<h2>Quiz terminé 🎉</h2><p>Score: ${score} / ${reponses.length}</p>`;
    }
}
