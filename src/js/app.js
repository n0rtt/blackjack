const sCase = (p, score) => {
    switch (p) {
        case "ace":
            score += 11;
            break;
        case "jack":
            score += 10;
            break;
        case "queen":
            score += 10;
            break;
        case "king":
            score += 10;
            break;
        default:
            score += p;
    }
    return score;
};

document.addEventListener("DOMContentLoaded", () => {
    // Create and shuffle a new deck of cards
    const deck = new Deck();
    const handPlayer = document.querySelector("#player-hand");
    const handDealer = document.querySelector("#dealer-hand");

    const hit = document.querySelector(".js-hit");
    const stand = document.querySelector(".js-stand");
    const dealerScore = document.querySelector("#dscore");
    const playerScore = document.querySelector("#pscore");

    let count = 0;
    let dScore = 0;
    let pScore = 0;
    deck.mount(handPlayer);
    deck.mount2(handDealer);
    deck.shuffle();
    let ace = 0;
    while (dScore < 17) {
        deck.cards[count].mount(deck.element2);
        deck.cards[
            count
        ].element.style.backgroundImage = `url('/img/revers.svg')`;
        dScore = sCase(deck.cards[count].rank, dScore);
        if (deck.cards[count].rank === "ace") {
            ace++;
        }
        if (dScore > 21 && ace > 0) {
            dScore -= 10;
            ace--;
        }
        if (dScore > 21 && ace > 0) {
            dScore -= 10;
            ace--;
        }
        count++;
    }

    ace = 0;
    hit.addEventListener("click", () => {
        deck.cards[count].mount(deck.element);
        pScore = sCase(deck.cards[count].rank, pScore);
        if (deck.cards[count].rank === "ace") {
            ace++;
        }
        console.log(ace);
        if (pScore > 21 && ace > 0) {
            pScore -= 10;
            ace--;
        }
        if (pScore > 21 && ace > 0) {
            pScore -= 10;
            ace--;
        }
        playerScore.textContent = "Score: " + pScore;
        count++;
    });

    const table = document.querySelector(".table");
    stand.addEventListener("click", () => {
        for (let i = 0; i < count; i++) {
            deck.cards[i].element.style.backgroundImage = "";
        }
        dealerScore.textContent = "Score: " + dScore;
        if (
            (dScore > 21 && pScore <= 21) ||
            (pScore <= 21 && dScore < pScore)
        ) {
            table.innerHTML = "<h1>WIN</h1>";
        }
        if (
            (pScore > 21 && dScore <= 21) ||
            (dScore <= 21 && pScore < dScore)
        ) {
            table.innerHTML = "<h1>LOSE</h1>";
        }
        if ((dScore > 21 && pScore > 21) || dScore === pScore) {
            table.innerHTML = "<h1>DRAW</h1>";
        }
        hit.style = "display:none;";
        stand.style = "display:none;";
    });

    table.addEventListener("click", () => {
        hit.style = "";
        stand.style = "";
        count = 0;
        dScore = 0;
        pScore = 0;
        dealerScore.innerHTML = "Score: ?";
        playerScore.innerHTML = "Score: 0";
        table.innerHTML = "";

        handPlayer.removeChild(deck.element);
        handDealer.removeChild(deck.element2);
        deck.mount(handPlayer);
        deck.mount2(handDealer);
        deck.shuffle();
        while (dScore < 17) {
            deck.cards[count].mount(deck.element2);
            deck.cards[
                count
            ].element.style.backgroundImage = `url('/img/revers.svg')`;
            dScore = sCase(deck.cards[count].rank, dScore);
            count++;
        }
    });
});
