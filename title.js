window.addEventListener("load", () => {
    const titleScreen = document.getElementById("title-screen");
    const pressStart = document.getElementById("press-start");
    const menuOptions = document.getElementById("menu-options");
    const newGameBtn = document.getElementById("new-game-btn");
    const startBtn = document.getElementById("start-btn")

    startBtn.addEventListener("click", () => {

        pressStart.style.opacity = "0";

        setTimeout(() => {
            pressStart.classList.add("hidden");
            menuOptions.classList.remove("hidden");
        }, 400);

    });

    newGameBtn.addEventListener("click", () => {
        titleScreen.style.opacity = "0";

        setTimeout(() => {
            titleScreen.style.display = "none";

            startIntro();    
        }, 500);
    });

});
