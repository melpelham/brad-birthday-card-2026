const envelope =
    document.getElementById("envelope");
const card =
    document.getElementById("card");
const cardWrapper =
    document.getElementById("cardWrapper");
const birthdayWords =
    document.getElementById("birthdayWords");
const instructions =
    document.getElementById("instructions");
const confetti =
    document.getElementById("confetti");
let envelopeOpened = false;
let cardOpened = false;

envelope.addEventListener("click", function () {
    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;
    envelope.classList.add("open");
    instructions.textContent =
        "Watch the card come out 💌";

    setTimeout(function () {
        cardWrapper.style.zIndex = "6";
    }, 1750);

    setTimeout(function () {
        birthdayWords.classList.add("animate");
        instructions.textContent =
            "Tap the card to open 💌";
    }, 3500);
});

card.addEventListener("click", function (event) {
    event.stopPropagation();
    if (!envelopeOpened) {
        return;
    }
    if (cardOpened) {
        return;
    }
    cardOpened = true;
    card.classList.add("open");
    instructions.textContent =
        "Happy Birthday! 💙";
    createConfetti();
});

function createConfetti() {
    const pieces = 140;
    const colours = [
        "#2563eb",
        "#60a5fa",
        "#1d4ed8",
        "#facc15",
        "#f97316",
        "#ef4444",
        "#22c55e",
        "#a855f7",
        "#ec4899",
        "#ffffff"
    ];

    for (let i = 0; i < pieces; i++) {
        const piece =
            document.createElement("span");
        piece.classList.add(
            "confetti-piece"
        );
        piece.style.left =
            Math.random() * 100 + "%";
        piece.style.backgroundColor =
            colours[
                Math.floor(
                    Math.random() *
                    colours.length
                )
            ];

        const size =
            Math.random() * 8 + 5;
        piece.style.width =
            size + "px";
        piece.style.height =
            size * 1.5 + "px";
        piece.style.animationDuration =
            Math.random() * 2 + 2 + "s";
        piece.style.animationDelay =
            Math.random() * 0.4 + "s";
        piece.style.setProperty(
            "--drift",
            (Math.random() * 400 - 200) + "px"
        );

        confetti.appendChild(piece);
        setTimeout(function () {
            piece.remove();
        }, 4500);
    }
}