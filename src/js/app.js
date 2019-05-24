document.addEventListener("DOMContentLoaded", () => {
    // Create and shuffle a new deck of cards
    const deck = new Deck();
    // const card = new Card(2, "clubs");
    const hand = document.querySelector("#player-hand");
    // card.mount(p);
    deck.shuffle();
    deck.mount(hand);
    console.log(deck);

    const hit = document.querySelector(".js-hit");
    const stand = document.querySelector(".js-stand");

    count = 0;

    hit.addEventListener("click", () => {
        deck.cards[count].mount(deck.element);
        count++;
    });

    // stand.document.addEventListener("click", () => {

    // });
});
