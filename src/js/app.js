document.addEventListener("DOMContentLoaded", () => {
    // Create and shuffle a new deck of cards
    const deck = new Deck();
    // const card = new Card(2, "clubs");
    const handPlayer = document.querySelector("#player-hand");
    const handDealer = document.querySelector("#dealer-hand");

    deck.mount2(handDealer);
    deck.mount(handPlayer);
    deck.shuffle();

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
