const envelope = document.getElementById("envelope");
const card = document.getElementById("card");
const cardWrapper =
    document.getElementById("cardWrapper");
const letters =
    document.getElementById("letters");
const instructions =
    document.getElementById("instructions");

let envelopeOpened = false;

envelope.addEventListener("click", function () {
    if (envelopeOpened) {
        return;
    }
    envelopeOpened = true;
    envelope.classList.add("open");
    instructions.textContent =
        "Watch the card come out 💌";
    setTimeout(function () {
        envelope.classList.add(
            "card-coming-down"
        );
        cardWrapper.style.zIndex = "6";
    }, 1750);
    setTimeout(function () {
        letters.classList.add(
            "animate"
        );
        instructions.textContent =
            "Tap the card to open 💕";
    }, 3500);
});

card.addEventListener("click", function (event) {
    event.stopPropagation();
    if (!envelopeOpened) {
        return;
    }
    card.classList.toggle("open");
    if (card.classList.contains("open")) {
        instructions.textContent =
            "Tap the card to close 💕";
    } else {
        instructions.textContent =
            "Tap the card to open 💕";
    }
});