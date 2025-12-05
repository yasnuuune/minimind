let model;

// Charger MobileNet pour la classification
async function loadModel() {
  model = await mobilenet.load();
  console.log("Modèle MobileNet chargé");
}
loadModel();

// Prévisualisation de l'image
const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  preview.src = url;
});

// Classification
const classifyBtn = document.getElementById('classifyBtn');
const resultP = document.getElementById('result');

classifyBtn.addEventListener('click', async () => {
  if (!preview.src) {
    resultP.textContent = "Veuillez sélectionner une image.";
    return;
  }
  resultP.textContent = "Classification en cours...";
  const predictions = await model.classify(preview);
  console.log(predictions);
  const top = predictions[0];
  resultP.textContent = `L'IA pense que c'est : ${top.className} (${(top.probability*100).toFixed(2)}%)`;
});

// Mini Chatbot IA
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

const botResponses = {
  "bonjour": "Bonjour ! Je suis ton assistant IA pédagogique.",
  "comment ça marche": "L'IA analyse les données et prend des décisions basées sur des modèles pré-entraînés.",
  "qu'est-ce que l'ia": "L'intelligence artificielle permet à un ordinateur d'apprendre et de prendre des décisions.",
  "qui t'a créé": "Je suis un prototype développé pour apprendre l'IA de manière ludique.",
  "default": "Je ne comprends pas, mais je peux te montrer comment l'IA classifie les images."
};

sendBtn.addEventListener('click', () => {
  const text = userInput.value.trim();
  if (!text) return;
  appendMessage(text, 'userMsg');
  userInput.value = '';
  
  const lower = text.toLowerCase();
  let reply = botResponses.default;
  for (const key in botResponses) {
    if (lower.includes(key)) {
      reply = botResponses[key];
      break;
    }
  }
  setTimeout(() => appendMessage(reply, 'botMsg'), 300);
});

function appendMessage(text, className) {
  const p = document.createElement('p');
  p.textContent = text;
  p.className = className;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}
