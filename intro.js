function startIntro() {
    const intro = document.getElementById("intro");
    const introText = document.getElementById("expo-dump");
    const game = document.querySelector(".container");

    intro.style.display = "flex";
    game.style.opacity = "0"; // hide the game until intro ends

    const messages = [
        "Your name is Kazuki, a member of the japanese mafia, The Yakuza.",
        "Back in 1999, you ran away from home together with your little brother, Kazuma.",  
        "After a couple of days you met a man, someone different, someone not like your 'father'.",
        "Years passed. You worked for him as part of the Shibukawa family; he gave you shelter, a roof, and a place to call home.",
        "Recently the tensions between the Taijiri family and yours grew too strong and war broke out.",
        "And now here we are..."
    ];

    let currentLine = 0;
    let skipIntro = false;

    intro.addEventListener("click", () => {
        skipIntro = true;
        finishIntro();
    });

    function showNextMessage() {
        if (skipIntro) return;

        if (currentLine >= messages.length) {
            finishIntro();
            return;
        }

        introText.textContent = messages[currentLine];
        introText.style.animation = "none";
        void introText.offsetWidth;
        introText.style.animation = "fadeInOut 6s ease";

        currentLine++;

        setTimeout(showNextMessage, 6000);
    }

    function finishIntro() {
        intro.style.display = "none";
        game.style.opacity = "1";
    }

    showNextMessage();
}

