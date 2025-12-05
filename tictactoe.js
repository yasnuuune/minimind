// tictactoe.js (VERSION CORRIGÉE & FONCTIONNELLE)
function initDemoMinMax() {
    const container = document.getElementById("demo-minmax");
    if (!container) return;

    // Message de victoire
    let messageDiv = document.getElementById("winner-message");
    if (!messageDiv) {
        messageDiv = document.createElement("div");
        messageDiv.id = "winner-message";
        messageDiv.className = "winner-message";
        messageDiv.style.textAlign = "center";
        messageDiv.style.marginTop = "15px";
        container.parentElement.appendChild(messageDiv);
    }
    messageDiv.textContent = "";

    // Zone d'explication Minimax
    let explanationDiv = document.getElementById("minmax-explanation");
    if (!explanationDiv) {
        explanationDiv = document.createElement("div");
        explanationDiv.id = "minmax-explanation";
        explanationDiv.style.border = "1px solid #ccc";
        explanationDiv.style.padding = "10px";
        explanationDiv.style.marginTop = "10px";
        explanationDiv.style.maxHeight = "200px";
        explanationDiv.style.overflowY = "auto";
        explanationDiv.innerHTML = "<strong>Minimax Explanation:</strong><div id='explanation-content'></div>";
        container.parentElement.appendChild(explanationDiv);
    } else {
        const ec = document.getElementById("explanation-content");
        if (ec) ec.innerHTML = "";
    }

    // Variables du jeu
    let board = ["", "", "", "", "", "", "", "", ""];
    const human = "X";
    const ai = "O";
    let gameOver = false;
    let cells = [];
    let explanationLog = [];

    // Fonction : ajoute une ligne dans le log
    function explain(message) {
        explanationLog.push(message);
        if (explanationLog.length > 12) explanationLog.shift();
        const ex = document.getElementById("explanation-content");
        if (ex) ex.innerHTML = explanationLog.join("<br>");
        explanationDiv.scrollTop = explanationDiv.scrollHeight;
    }

    // Fonction : rendu du tableau
    function render() {
        for (let i = 0; i < 9; i++) {
            cells[i].textContent = board[i];
        }
    }

    // Création des cases
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;

        cell.style.width = "60px";
        cell.style.height = "60px";
        cell.style.display = "inline-flex";
        cell.style.justifyContent = "center";
        cell.style.alignItems = "center";
        cell.style.fontSize = "2em";
        cell.style.cursor = "pointer";

        cell.addEventListener("click", async () => {
            if (gameOver) return;

            const idx = parseInt(cell.dataset.index);
            if (board[idx] === "") {
                makeMove(idx, human);

                if (!gameOver) {
                    await new Promise(r => setTimeout(r, 200));
                    await aiMove();
                }
            }
        });

        container.appendChild(cell);
        cells.push(cell);
    }

    // Fonction : jouer un coup
    function makeMove(index, player) {
        if (gameOver) return;
        board[index] = player;
        render();

        if (checkWin(board, player)) {
            gameOver = true;
            messageDiv.textContent = `${player} a gagné !`;
            explain(`${player} remporte la partie.`);
        } else if (!board.includes("")) {
            gameOver = true;
            messageDiv.textContent = "Égalité !";
            explain("La partie est une égalité.");
        }
    }

    // IA : choisit le meilleur coup
    async function aiMove() {
        if (gameOver) return;

        let bestScore = -Infinity;
        let bestMove = null;

        explanationLog = [];
        explain("L'IA réfléchit...");

        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = ai;
                let score = await minimax(board, 0, false);
                board[i] = "";

                explain(`IA teste case ${i} → score ${score}`);

                if (score > bestScore) {
                    bestScore = score;
                    bestMove = i;
                }

                await new Promise(r => setTimeout(r, 50));
            }
        }

        makeMove(bestMove, ai);
    }

    // Algorithme minimax
    async function minimax(b, depth, isMax) {
        if (checkWin(b, ai, true)) return 10 - depth;
        if (checkWin(b, human, true)) return depth - 10;
        if (!b.includes("")) return 0;

        if (isMax) {
            let best = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (b[i] === "") {
                    b[i] = ai;
                    const score = await minimax(b, depth + 1, false);
                    b[i] = "";
                    best = Math.max(best, score);
                }
            }
            return best;
        } else {
            let best = Infinity;
            for (let i = 0; i < 9; i++) {
                if (b[i] === "") {
                    b[i] = human;
                    const score = await minimax(b, depth + 1, true);
                    b[i] = "";
                    best = Math.min(best, score);
                }
            }
            return best;
        }
    }

    // Vérifie la victoire
    function checkWin(b, player, simulate = false) {
        const combos = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        return combos.some(c => c.every(i => b[i] === player));
    }

    // Bouton Reset
    let resetBtn = document.getElementById("minmax-reset-btn");
    if (!resetBtn) {
        resetBtn = document.createElement("button");
        resetBtn.id = "minmax-reset-btn";
        resetBtn.textContent = "Recommencer";
        resetBtn.className = "btn";
        resetBtn.style.marginTop = "12px";
        container.parentElement.appendChild(resetBtn);
    }

    resetBtn.onclick = () => {
        board = ["", "", "", "", "", "", "", "", ""];
        gameOver = false;
        explanationLog = [];
        messageDiv.textContent = "";
        document.getElementById("explanation-content").innerHTML = "";
        render();
    };

    render();
}

// Lancement
window.addEventListener("load", () => {
    if (document.getElementById("demo-minmax")) initDemoMinMax();
});
