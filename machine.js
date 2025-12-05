// Exemple minimal
function handleAnswer(answer){
    if(currentNode.guess){
        if(answer === "yes"){
            alert("Youpi ! J'ai deviné !");
            resetGame();
        } else {
            // Montre la zone input correctement
            inputArea.style.display = "block";
            yesBtn.style.display = "none";
            noBtn.style.display = "none";
        }
    } else {
        currentNode = currentNode[answer];
        displayNode();
    }
}

function resetGame(){
    currentNode = knowledge;
    displayNode();
    inputArea.style.display = "none";  // cache de nouveau après validation
    yesBtn.style.display = "inline-block";
    noBtn.style.display = "inline-block";
    newObjectInput.value = "";
    newQuestionInput.value = "";
    answerForNew.value = "yes";
}
