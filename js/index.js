document.addEventListener("DOMContentLoaded", function() {
    const rocket = document.querySelector(".rocket");
    const playButtonContainer = document.querySelector(".play-button-container");
    const playTriangle = document.querySelector(".play-triangle");
    const audio = document.getElementById("landing-audio");

    playTriangle.addEventListener("click", function(event) {
        event.stopPropagation();  // Assegurar que només el triangle és clicable
        rocket.style.animationPlayState = "running";
        audio.play();
        playButtonContainer.style.display = "none";  // Amaga el botó SVG
    });
});

