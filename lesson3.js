const images = [
  { src: "./img/cat.png", label: "Chat" },
  {
    src: "./img/dog.png",
    label: "Chien",
  },
  {
    src: "./img/fruit.jpg",
    label: "Fruit",
  },
  {
    src: "./img/fish.png",
    label: "Poisson",
  },
  {
    src: "./img/ladybug.png",
    label: "Coccinelle",
  },
];

// ===== Knowledge = model =====
let knowledge = {}; // stores how many times student associated each image index with categories
let currentIndex = 0;

const currentImage = document.getElementById("currentImage");
const feedback = document.getElementById("feedback");
const categoryDivs = document.querySelectorAll("#categories .clickable-div");

function showImage() {
  if (currentIndex >= images.length) {
    feedback.textContent =
      "🎉 Toutes les images ont été classées ! L'IA va maintenant essayer de deviner seule.";
    currentImage.style.display = "none";
    startAIguessing();
    return;
  }
  currentImage.src = images[currentIndex].src;
  feedback.textContent = "";
}

// ===== Student clicks category =====
categoryDivs.forEach((div) => {
  div.onclick = () => {
    const chosenCategory = div.dataset.category;
    const actualLabel = images[currentIndex].label;

    // Update model
    if (!knowledge[currentIndex]) knowledge[currentIndex] = {};
    knowledge[currentIndex][chosenCategory] =
      (knowledge[currentIndex][chosenCategory] || 0) + 1;

    // Feedback
    if (chosenCategory === actualLabel) {
      feedback.textContent = `✅ Correct ! L'IA apprend que c'est un ${chosenCategory}.`;
    } else {
      feedback.textContent = `❌ Incorrect. C'était un ${actualLabel}. L'IA apprend quand même.`;
    }

    currentIndex++;
    setTimeout(showImage, 1000);
  };
});

// ===== AI guessing phase =====
function startAIguessing() {
  let aiIndex = 0;
  currentImage.style.display = "block";

  function aiGuess() {
    if (aiIndex >= images.length) {
      feedback.textContent = "🤖 L'IA a fini de deviner toutes les images !";
      currentImage.style.display = "none";
      return;
    }

    const img = images[aiIndex];
    currentImage.src = img.src;

    // AI prediction = choose most frequent student label, fallback to random
    const stats = knowledge[aiIndex] || {};
    let prediction = Object.keys(stats).reduce(
      (a, b) => (stats[a] > stats[b] ? a : b),
      null
    );
    if (!prediction)
      prediction = ["Chat", "Chien", "Fruit","Poisson","Coccinelle"][Math.floor(Math.random() * 3)];

    feedback.textContent = `🤖 L'IA prédit : ${prediction} (vrai : ${img.label})`;

    aiIndex++;
    setTimeout(aiGuess, 1500);
  }

  aiGuess();
}

showImage();
