const totalLecons = 5;

// Initialise les leçons si ce n’est pas déjà fait
if(!localStorage.getItem("progres")){
    const initial = {};
    for(let i=1; i<=totalLecons; i++){
        initial[`lecon${i}`] = i===1 ? 1 : 0; // 1 = débloquée, 0 = verrouillée
    }
    localStorage.setItem("progres", JSON.stringify(initial));
}

// Lecture et sauvegarde
function lireProgres() {
    return JSON.parse(localStorage.getItem("progres"));
}
function sauverProgres(p) {
    localStorage.setItem("progres", JSON.stringify(p));
}

// Met à jour les cartes sur l'index
function majIndex() {
    const p = lireProgres();
    for(let i=1; i<=totalLecons; i++){
        const carte = document.getElementById(`lecon${i}`);
        if(!carte) continue;
        const status = carte.querySelector(".statut");

        if(p[`lecon${i}`] === 2){
            status.textContent = "🏛️ Terminé";
            carte.classList.remove("locked");
        } else if(p[`lecon${i}`] === 1){
            status.textContent = "📜 Disponible";
            carte.classList.remove("locked");
        } else {
            status.textContent = "🔒 Verrouillée";
            carte.classList.add("locked");
        }
    }
}

// Ouvre une leçon si elle est débloquée
function ouvrirLecon(num) {
    const p = lireProgres();
    if(p[`lecon${num}`] === 1 || p[`lecon${num}`] === 2){
        window.location.href = `lecon${num}.html`;
    } else {
        alert("Cette leçon est encore verrouillée !");
    }
}

// Terminer une leçon et ouvrir le popup
function terminerLecon(numLecon){
    const p = lireProgres();
    p[`lecon${numLecon}`] = 2; // marquée terminée
    if(numLecon < totalLecons && p[`lecon${numLecon+1}`] === 0){
        p[`lecon${numLecon+1}`] = 1; // débloque la prochaine leçon
    }
    sauverProgres(p);

    // Met à jour index et dashboard
    majIndex();
    majDashboard();

    // Ouvre le popup
    const popup = document.getElementById("popup");
    if(popup){
        popup.style.display = "flex";
        popup.dataset.lecon = numLecon; // stocke le numéro de leçon
    }
}

// Fermer le popup
function fermerPopup(){
    const popup = document.getElementById("popup");
    if(popup) popup.style.display = "none";
}

// Redirection vers le quiz
function allerAuQuiz(){
    const popup = document.getElementById("popup");
    if(popup){
        const lecon = parseInt(popup.dataset.lecon);
        window.location.href = `quiz${lecon}.html`;
    }
}

// Retour à l'index
function allerAuxLecons(){
    window.location.href = "index.html";
}

// Thèmes
function changerTheme(theme){
    document.body.classList.remove('light','dark','colorblind');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
}

// Progress Dashboard
function majDashboard(){
    const p = lireProgres();
    let termine = 0;
    for(let i=1;i<=totalLecons;i++){
        if(p[`lecon${i}`] === 2) termine++;
    }
    const pourcentage = Math.round((termine/totalLecons)*100);
    const bar = document.getElementById("progress-bar");
    const text = document.getElementById("progress-text");
    if(bar) bar.style.width = pourcentage + "%";
    if(text) text.textContent = `${pourcentage}% des leçons terminées`;
}
function filtrerLecons() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const cartes = document.querySelectorAll(".carte");

    cartes.forEach(carte => {
        const titre = carte.querySelector("h2").textContent.toLowerCase();
        if(titre.includes(input)){
            carte.style.display = "block";
        } else {
            carte.style.display = "none";
        }
    });
}


// Initialisation au chargement
window.addEventListener('load', ()=>{
    majIndex();
    majDashboard();
    const theme = localStorage.getItem('theme') || 'light';
    changerTheme(theme);
});
// ==== GLOBAL VARIABLES ====
let lives = 3;
let score = 0;
const viesDiv = document.getElementById("vies");
const animalImage = document.getElementById("animalImage");
const animalInput = document.getElementById("animalInput");
const submitAnimal = document.getElementById("submitAnimal");
const feedbackAnimal = document.getElementById("feedbackAnimal");
const chatWindow = document.getElementById("chatWindow");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const quizDiv = document.getElementById("quiz");
const resultatDiv = document.getElementById("resultat");

// ==== UPDATE LIVES ====
function updateLives() {
    viesDiv.textContent = "❤️".repeat(lives);
}

// ==== IMAGE GAME ====
const animals = [
    {name: "chat", src:"images/cat.jpg"},
    {name: "chien", src:"images/dog.jpg"},
    {name: "lion", src:"images/lion.jpg"},
    {name: "éléphant", src:"images/elephant.jpg"}
];
let currentAnimal = 0;

function showAnimal() {
    if(currentAnimal >= animals.length) {
        feedbackAnimal.textContent = "Toutes les images terminées ! Passons au chatbot.";
        return;
    }
    animalImage.src = animals[currentAnimal].src;
    animalInput.value = "";
    feedbackAnimal.textContent = "";
}

submitAnimal.addEventListener("click", () => {
    const answer = animalInput.value.trim().toLowerCase();
    if(answer === animals[currentAnimal].name) {
        score++;
        feedbackAnimal.textContent = "✅ Correct !";
    } else {
        lives--;
        feedbackAnimal.textContent = `❌ Incorrect ! C'était ${animals[currentAnimal].name}`;
    }
    updateLives();
    currentAnimal++;
    if(lives <= 0) {
        resultatDiv.innerHTML = `<h2>Game Over 😢</h2><p>Score final : ${score}</p>`;
    } else {
        showAnimal();
    }
});

// Initial animal
showAnimal();

// ==== CHATBOT ====
const botResponses = {
    "bonjour": "Bonjour ! Comment puis-je t'aider aujourd'hui ?",
    "quel animal est-ce": "Tu peux taper le nom de l'animal dans la partie 1.",
    "qui es-tu": "Je suis ton petit assistant IA pour apprendre et jouer !",
    "au revoir": "Au revoir ! À bientôt 😊"
};

sendBtn.addEventListener("click", () => {
    const userText = userInput.value.trim();
    if(userText === "") return;
    chatWindow.innerHTML += `<div class="chat-message chat-user">Tu: ${userText}</div>`;
    
    let response = "Je ne comprends pas, peux-tu reformuler ?";
    for(const key in botResponses){
        if(userText.toLowerCase().includes(key)) {
            response = botResponses[key];
        }
    }
    
    chatWindow.innerHTML += `<div class="chat-message chatbot">Assistant: ${response}</div>`;
    chatWindow.scrollTop = chatWindow.scrollHeight;
    userInput.value = "";
});

// ==== QUIZ ====
const questions = [
    {q:"Le Machine Learning est une forme d'IA ?", options:["Oui","Non"], answer:0},
    {q:"Un dataset est un ensemble de données ?", options:["Oui","Non"], answer:0},
    {q:"L'overfitting signifie que le modèle apprend trop bien les données ?", options:["Oui","Non"], answer:0},
];

let currentQuestion = 0;

function showQuestion() {
    if(lives <= 0 || currentQuestion >= questions.length) {
        quizDiv.innerHTML = `<h3>Quiz terminé ! Score: ${score} / ${questions.length + animals.length}</h3>`;
        return;
    }

    const q = questions[currentQuestion];
    let html = `<div class="question"><p>${q.q}</p>`;
    q.options.forEach((opt,i) => {
        html += `<button onclick="checkAnswer(${i})">${opt}</button>`;
    });
    html += `</div>`;
    quizDiv.innerHTML = html;
    updateLives();
}

function checkAnswer(selected) {
    if(selected === questions[currentQuestion].answer) score++;
    else lives--;
    currentQuestion++;
    showQuestion();
}

