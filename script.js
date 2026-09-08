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


/* =========================
   OPEN ENVELOPE
========================= */

envelope.addEventListener("click", function () {

    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;

    envelope.classList.add("open");

    instructions.textContent =
        "Watch the card come out 💌";


    /*
        Bring the card to the front
        at the top of its movement.
    */

    setTimeout(function () {

        cardWrapper.style.zIndex = "6";

    }, 1750);


    /*
        Birthday lettering starts
        once the card has finished
        moving.
    */

    setTimeout(function () {

        birthdayWords.classList.add("animate");

        instructions.textContent =
            "Tap the card to open 💌";

    }, 3500);

});


/* =========================
   OPEN CARD
========================= */

card.addEventListener("click", function (event) {

    event.stopPropagation();


    if (!envelopeOpened) {
        return;
    }


    if (cardOpened) {
        return;
    }


    cardOpened = true;


    /* Open the card */

    card.classList.add("open");


    /* Change instructions */

    instructions.textContent =
        "Happy Birthday! 💙";


    /* 🎉 CONFETTI */

    createConfetti();

});


/* =========================
   CREATE CONFETTI
========================= */

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


        /*
            Random horizontal starting
            position.
        */

        piece.style.left =
            Math.random() * 100 + "%";


        /*
            Random colour.
        */

        piece.style.backgroundColor =
            colours[
                Math.floor(
                    Math.random() *
                    colours.length
                )
            ];


        /*
            Random size.
        */

        const size =
            Math.random() * 8 + 5;


        piece.style.width =
            size + "px";


        piece.style.height =
            size * 1.5 + "px";


        /*
            Random falling speed.
        */

        piece.style.animationDuration =
            Math.random() * 2 + 2 + "s";


        /*
            Slight random delay
            so they don't all fall
            at exactly the same time.
        */

        piece.style.animationDelay =
            Math.random() * 0.4 + "s";


        /*
            Random sideways movement.
        */

        piece.style.setProperty(
            "--drift",
            (Math.random() * 400 - 200) + "px"
        );


        confetti.appendChild(piece);


        /*
            Remove the confetti after
            the animation finishes.
        */

        setTimeout(function () {

            piece.remove();

        }, 4500);

    }

}