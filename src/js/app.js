document.addEventListener("DOMContentLoaded", () => {
    // Create and shuffle a new deck of cards
    const deck = new Deck();
    // const card = new Card(2, "clubs");
    const handPlayer = document.querySelector("#player-hand");
    const handDealer = document.querySelector("#dealer-hand");

    
    deck.mount(handPlayer);
    deck.mount2(handDealer);
    
    deck.shuffle();

    const hit = document.querySelector(".js-hit");
    const stand = document.querySelector(".js-stand");

    count = 0;
    
    i = 0;
    while(i < 17) {
      deck.cards[count].mount(deck.element2);
      console.log(deck.cards[count].element2);
      switch(deck.cards[count].rank){
        case "ace":
        i+=11;
        break;
        case "jack":
        i+=10;
        break;
        case "queen":
        i+=10;
        break;
        case "king":
        i+=10;
        break;
        default:
        i+=deck.cards[count].rank;
      }
      count++;
      console.log(i);
    }

    hit.addEventListener("click", () => {
        deck.cards[count].mount(deck.element);
        count++;
    });

    // stand.document.addEventListener("click", () => {
    // });
});
