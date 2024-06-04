document.addEventListener("DOMContentLoaded", function() {
    const rocket = document.querySelector(".rocket");
    const playButtonContainer = document.querySelector(".play-button-container");
    const playTriangle = document.querySelector(".play-triangle");
    const audio = document.getElementById("landing-audio");

    playTriangle.addEventListener("click", function(event) {
        event.stopPropagation();  // Assegurar que només el triangle és clicable
        rocket.style.animation = "none";  // Aturar l'animació
        rocket.offsetHeight;  // Forçar el reflow per reiniciar l'animació
        rocket.style.animation = "";  // Restaurar l'animació
        rocket.style.animationPlayState = "running";
        audio.play();
        playButtonContainer.style.display = "none";  // Amaga el botó SVG
    });

    audio.addEventListener("ended", function() {
        playButtonContainer.style.display = "block";  // Mostra el botó SVG un cop ha finalitzat l'àudio
        rocket.style.animationPlayState = "paused";  // Pausa l'animació
    });
});
