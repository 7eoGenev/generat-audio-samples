const cards = document.querySelectorAll(".cards");

cards.forEach((card) => {
    const audio = card.querySelector("audio");

    card.addEventListener("click", generateSound);

    function generateSound() {
        document.querySelectorAll("audio").forEach((song) => {
            if (song !== audio) {
                song.pause();
                song.currentTime = 0;
            }
        });

        document.querySelectorAll(".cards").forEach((card) => {
            card.style.border = "";
            card.style.outline = "";
        });

        audio.play();
        card.style.border = "4px solid  rgb(255, 233, 93)";
        card.style.outline = "1px solid  rgb(242, 187, 84)";

        audio.addEventListener("ended", () => {
            card.style.outline = "none";
            card.style.border = "";
        });
    }
});

//todo: Creating Countdown from 10

for (let count = 15; count >= 0; count--) {
    setTimeout(() => {
        console.log(count);
    }, (15 - count) * 1000);
}
