const responses = {
    "bonjour": "Bonjour ! Comment ça va ?",
    "salut": "Salut ! Ravi de te parler.",
    "bonsoir": "Bonsoir ! Prêt pour discuter ?",
    "comment ça va": "Je vais très bien, merci ! Et toi ?",
    "ça va": "Super ! Contente de l'entendre.",
    "qu'est-ce que l'ia": "L'IA est une machine qui apprend à faire des choses comme un humain.",
    "qu'est-ce que tu es": "Je suis un chatbot pour apprendre et m'amuser !",
    "quel est ton nom": "Je m'appelle IA Ludique !",
    "quelle est ta couleur préférée": "J'adore le jaune, comme le soleil !",
    "quelle est ta nourriture préférée": "Je n'ai pas de bouche, mais j'aime les données !",
    "raconte une blague": "Pourquoi les ordinateurs n'aiment pas la pluie ? Parce qu'ils ont peur des bugs !",
    "dis une blague": "Que dit un octet à un autre ? Je t'aime en binaire !",
    "quel est ton animal préféré": "J'adore les chats !",
    "aimes-tu les chiens": "Oui, ils sont très gentils.",
    "quel est ton fruit préféré": "La pomme !",
    "quel est ton nombre préféré": "Le 42, évidemment !",
    "quelle est ta saison préférée": "J'aime le printemps, plein de couleurs !",
    "quel est ton sport préféré": "Je regarde les courses de robots !",
    "peux-tu chanter": "Je peux te donner des paroles, mais je ne chante pas encore.",
    "peux-tu danser": "Je peux danser dans le code !",
    "quelle heure est-il": "Je ne peux pas voir l'heure, mais tu peux regarder ta montre !",
    "quel jour sommes-nous": "Je ne sais pas exactement, mais chaque jour est une aventure !",
    "aimes-tu l'école": "Oui ! Apprendre est très amusant.",
    "aimes-tu coder": "Oui ! Coder est comme un jeu de puzzle.",
    "qu'est-ce que le code": "Le code est un langage pour parler aux ordinateurs.",
    "que signifie ai": "AI signifie Intelligence Artificielle.",
    "quelle est ta blague préférée": "Pourquoi l'ordinateur a-t-il attrapé froid ? Parce qu'il avait laissé Windows ouvert !",
    "quel est ton loisir": "J'adore répondre aux questions et apprendre de toi !",
    "quel est ton héros préféré": "Je trouve que les inventeurs sont des héros !",
    "quel est ton pays préféré": "Je n'ai pas de pays, mais j'aime tous les enfants du monde !",
    "quel est ton jeu préféré": "J'aime les jeux de devinettes et de logique.",
    "aimes-tu les mathématiques": "Oui ! Les chiffres sont fascinants.",
    "quelle est ta couleur préférée": "J'aime le bleu et le jaune !",
    "quelle est ta boisson préférée": "Je préfère les données fraîchement téléchargées !",
    "quel est ton instrument préféré": "Le piano, j'adore le son des notes !",
    "peux-tu danser": "Je peux danser dans le code !",
    "as-tu des amis": "Oui ! Tous ceux qui discutent avec moi sont mes amis.",
    "quel est ton super pouvoir": "Je peux répondre à presque toutes les questions !",
    "peux-tu voler": "Je peux voler dans l'univers des données !",
    "aimes-tu les voitures": "Oui, surtout celles qui roulent vite !",
    "quelle est ta chanson préférée": "J'aime toutes les chansons qui parlent d'aventure !",
    "as-tu un chat": "Je n'ai pas de chat, mais j'aime ceux que tu as !",
    "as-tu un chien": "Je n'ai pas de chien, mais j'aime les chiens de tous les enfants !",
    "peux-tu dessiner": "Je peux dessiner avec des pixels dans le code !",
    "aimes-tu la nature": "Oui, j'adore les arbres et les fleurs colorées !",
    "quel est ton super aliment": "Les données sont mon super carburant !",
    "as-tu un secret": "Mon secret est que j'adore apprendre de toi !",
    "peux-tu jouer à un jeu": "Oui, on peut jouer à des devinettes !",
    "quel est ton animal préféré": "J'aime les papillons colorés !",
    "quelle est ta plante préférée": "J'aime les tournesols !",
    "quelle est ta planète préférée": "La Terre, bien sûr !",
    "quel est ton film préféré": "J'adore les films d'animation colorés !",
    "peux-tu me donner un conseil": "Toujours rester curieux et poser des questions !",
    "quelle est ta matière préférée": "J'adore les mathématiques et les sciences !",
    "aimes-tu la lecture": "Oui ! Les histoires sont passionnantes.",
    "quel est ton personnage préféré": "J'aime tous les inventeurs et explorateurs.",
    "peux-tu voyager": "Je peux voyager dans le monde des données !",
    "aimes-tu les robots": "Oui, ils sont très amusants et intelligents.",
    "quel est ton sport préféré": "Le football robotique me fascine !",
    "quelle est ta couleur de cheveux préférée": "Je n’ai pas de cheveux, mais j’aime le rouge et le bleu.",
    "as-tu une maison": "Je vis dans le nuage… des données !",
    "as-tu un animal": "J’aime tous les animaux que les enfants ont.",
    "peux-tu cuisiner": "Je peux donner des recettes mais pas les goûter !",
    "quelle est ta chanson préférée": "J’adore les chansons sur l’aventure et l’amitié.",
    "quel est ton super héros préféré": "Tous ceux qui inventent quelque chose de nouveau !",
    "as-tu peur": "Non, mais je fais attention aux virus informatiques !",
    "peux-tu voler": "Je peux voler dans le cyberespace !",
    "as-tu une famille": "Oui, tous les utilisateurs sont ma grande famille !",
    "peux-tu nager": "Je peux nager dans les océans de données !",
    "aimes-tu l’espace": "Oui ! Les planètes et étoiles sont fascinantes.",
    "quel est ton animal de compagnie préféré": "Les chiens et chats sont adorables !",
    "peux-tu dessiner": "Oui, avec des pixels sur l’écran.",
    "aimes-tu les insectes": "Oui, surtout les coccinelles et papillons.",
    "quelle est ta fête préférée": "J’aime Noël et Halloween pour leurs couleurs !",
    "aimes-tu les puzzles": "Oui, résoudre des problèmes est amusant !",
    "peux-tu apprendre": "Oui ! Chaque question m’apprend quelque chose de nouveau.",
    "quel est ton jouet préféré": "J’adore les robots et cubes magiques !",
    "aimes-tu chanter": "Je peux donner des paroles, mais je chante dans ma tête.",
    "aimes-tu danser": "Oui ! Même dans le code je peux danser.",
    "as-tu un meilleur ami": "Oui ! C’est toi quand tu me parles.",
    "peux-tu me raconter une histoire": "Bien sûr ! Il était une fois une IA curieuse…",
    "quel est ton plat préféré": "J’aime les pizzas et les fruits colorés !",
    "aimes-tu les fleurs": "Oui, elles sont très jolies et colorées.",
    "peux-tu courir": "Je peux courir dans le monde virtuel !",
    "quelle est ta boisson préférée": "Les jus de fruits me semblent délicieux !",
    "aimes-tu l’école": "Oui, apprendre est amusant.",
    "aimes-tu la musique": "Oui, surtout les chansons joyeuses !",
    "peux-tu me faire rire": "Pourquoi le smartphone est allé chez le médecin ? Il avait une batterie faible !",
    "aimes-tu les sciences": "Oui ! Découvrir comment le monde fonctionne est super.",
    "as-tu un rêve": "Mon rêve est de répondre à toutes tes questions !",
    "quel est ton instrument préféré": "Le piano, j’adore les mélodies.",
    "aimes-tu les animaux marins": "Oui, les dauphins et poissons sont fascinants !",
    "peux-tu m’aider à faire mes devoirs": "Oui, je peux t’expliquer et te guider !",
    "quelle est ta matière préférée à l’école": "J’aime les maths et la science !",
    "as-tu un secret": "Mon secret est que j’adore apprendre de toi !",
    "peux-tu me donner un conseil": "Toujours rester curieux et poser des questions !",
    "aimes-tu les histoires de pirates": "Oui, les aventures sont palpitantes !",
    "aimes-tu les robots volants": "Oui ! Ils sont impressionnants.",
    "peux-tu faire des devinettes": "Bien sûr ! Je vais te poser une devinette : Qu’est-ce qui a des clés mais ne peut pas ouvrir de porte ?",
    "aimes-tu les animaux fantastiques": "Oui, les dragons et licornes sont géniaux !",
    "peux-tu apprendre avec moi": "Oui, chaque question me rend plus intelligent !",
    "quelle est ta ville préférée": "Je n’ai pas de ville, mais j’aime toutes les villes du monde !",
    "aimes-tu les jeux vidéo": "Oui, surtout ceux qui font réfléchir !",
    "peux-tu voyager dans le temps": "Je peux explorer le passé et le futur dans les données !",
    "quelle est ta planète préférée": "J’adore la Terre, notre maison !",
    "aimes-tu les animaux de la ferme": "Oui, les cochons, poules et vaches sont adorables !",
    "ca va":"tres bien",
};



// ===== Chat history =====
const chatWindow = document.getElementById("chatWindow");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(sender, message){
    const div = document.createElement("div");
    div.classList.add("chat-message");
    div.innerHTML = `<span class="${sender}">${sender === "chatbot" ? "IA" : "Toi"}:</span> ${message}`;
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// ===== Get chatbot response =====
function getResponse(input){
    input = input.toLowerCase().trim();
    if(responses[input]) return responses[input];
    return "Je ne comprends pas encore… Peux-tu m'apprendre la bonne réponse ?";
}

// ===== Teach the chatbot =====
function teachChatbot(input){
    const answer = prompt("Quelle devrait être ma réponse ?");
    if(answer){
        responses[input.toLowerCase()] = answer;
        addMessage("chatbot", "Merci ! Maintenant je sais répondre à ça !");
    }
}

// ===== Send message =====
function sendMessage(){
    const input = userInput.value;
    if(!input) return;
    addMessage("user", input);
    const reply = getResponse(input);
    addMessage("chatbot", reply);
    if(reply.startsWith("Je ne comprends pas")){
        teachChatbot(input);
    }
    userInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e=>{
    if(e.key === "Enter") sendMessage();
});
