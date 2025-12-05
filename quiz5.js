// ===== Part 3 – Quiz =====
const finalQuestions = [
  {
    q: "Qu'est-ce qu'un dataset en Machine Learning ?",
    options: [
      "Un ensemble de données",
      "Un algorithme",
      "Un programme",
      "Un robot",
    ],
    answer: 0,
  },
  {
    q: "Quel type d'apprentissage utilise des récompenses ?",
    options: ["Renforcement", "Supervisé", "Non supervisé", "Clustering"],
    answer: 0,
  },
  {
    q: "L'overfitting signifie :",
    options: [
      "Le modèle mémorise trop les données d'entraînement",
      "Le modèle oublie tout",
      "Le modèle ne démarre pas",
      "Le modèle corrige toutes les erreurs",
    ],
    answer: 0,
  },
  {
    q: "Quel algorithme est utilisé pour la classification simple ?",
    options: ["KNN", "Tri à bulles", "HTML", "CSS"],
    answer: 0,
  },
  {
    q: "Que doit-on faire avant d'entraîner un modèle ?",
    options: [
      "Nettoyer et préparer les données",
      "Écrire un livre",
      "Dormir",
      "Dessiner un schéma",
    ],
    answer: 0,
  },
];

let currentQ = 0;
let scoreQ = 0;
let livesQ = 3;

const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("resultatQuiz");
const viesQDiv = document.getElementById("viesQuiz");

function updateLivesQuiz() {
  viesQDiv.textContent = "❤️".repeat(livesQ);
}

function showFinalQuestion() {
  if (livesQ <= 0) {
    quizDiv.innerHTML = `<h3>Game Over 😢</h3><p>Score : ${scoreQ} / ${finalQuestions.length}</p>`;
    return;
  }
  if (currentQ >= finalQuestions.length) {
    quizDiv.innerHTML = `<h3>Quiz terminé 🎉</h3><p>Score : ${scoreQ} / ${finalQuestions.length}</p>`;
    return;
  }

  const q = finalQuestions[currentQ];
  let html = `<div class="question"><p>${currentQ + 1}. ${q.q}</p></div>`;
  q.options.forEach((opt, i) => {
    html += `<button onclick="checkFinalAnswer(${i})">${opt}</button>`;
  });
  quizDiv.innerHTML = html;
  updateLivesQuiz();
}

function checkFinalAnswer(selected) {
  if (selected === finalQuestions[currentQ].answer) {
    scoreQ++;
  } else {
    livesQ--;
  }
  currentQ++;
  showFinalQuestion();
}

// Start the quiz
showFinalQuestion();
