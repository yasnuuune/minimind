
let tree = {
    question: "Est-ce un animal ?",
    yes: {
        question: "Est-ce que ça vit dans l'eau ?",
        yes: {
            question: "Est-ce un animal de mer connu ?",
            yes: "requin", // shark
            no: "poisson"   // generic fish
        },
        no: {
            question: "Est-ce un animal domestique ?",
            yes: {
                question: "Est-ce qu'il aime les câlins ?",
                yes: "chat",
                no: "chien"
            },
            no: {
                question: "Est-ce un animal sauvage d'Afrique ?",
                yes: "lion",
                no: {
                    question: "Est-ce un oiseau ?",
                    yes: "aigle",
                    no: "éléphant"
                }
            }
        }
    },
    no: {
        question: "Est-ce un véhicule ?",
        yes: {
            question: "Est-ce que ça a deux roues ?",
            yes: {
                question: "Est-ce motorisé ?",
                yes: "moto",
                no: "vélo"
            },
            no: {
                question: "Est-ce que ça roule sur terre ?",
                yes: {
                    question: "Est-ce utilisé pour transporter beaucoup de personnes ?",
                    yes: "bus",
                    no: "voiture"
                },
                no: "bateau" // a vehicle that is not on land
            }
        },
        no: {
            question: "Est-ce un objet électronique ?",
            yes: {
                question: "Est-ce qu'on utilise principalement pour travailler ?",
                yes: "ordinateur",
                no: {
                    question: "Est-ce qu'on utilise pour le divertissement ?",
                    yes: "console de jeux",
                    no: "téléphone"
                }
            },
            no: {
                question: "Est-ce un meuble ?",
                yes: {
                    question: "Est-ce pour s'asseoir ?",
                    yes: "chaise",
                    no: "table"
                },
                no: {
                    question: "Est-ce utilisé en cuisine ?",
                    yes: "casserole",
                    no: "livre"
                }
            }
        }
    }
};

let currentNode = tree;

// HTML elements
const questionDiv = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const resultDiv = document.getElementById("result");

// Show question or guess
function updateQuestion() {
    if (typeof currentNode === "string") {
        questionDiv.textContent = `Est-ce que c'est un ${currentNode} ?`;
    } else {
        questionDiv.textContent = currentNode.question;
    }
}

// Handle answer
function handleAnswer(answer) {
    if (typeof currentNode === "string") {
        if (answer === "yes") {
            resultDiv.textContent = `🎉 J'ai deviné ! C'est bien un ${currentNode} !`;
        } else {
            resultDiv.textContent = `😢 Je n'ai pas trouvé cette fois...`;
        }
        // Reset after 2 seconds
        setTimeout(() => {
            currentNode = tree;
            resultDiv.textContent = "";
            updateQuestion();
        }, 2000);
    } else {
        currentNode = currentNode[answer];
        updateQuestion();
    }
}

// Button events
yesBtn.addEventListener("click", () => handleAnswer("yes"));
noBtn.addEventListener("click", () => handleAnswer("no"));

// Initial display
updateQuestion();
