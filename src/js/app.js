
sCase=(dScore)=>{
  switch(deck.cards[count].rank){
    case "ace":
    dScore+=11;
    break;
    case "jack":
    dScore+=10;
    break;
    case "queen":
    dScore+=10;
    break;
    case "king":
    dScore+=10;
    break;
    default:
    dScore+=deck.cards[count].rank;
  }
}



document.addEventListener("DOMContentLoaded", () => {
    // Create and shuffle a new deck of cards
    const deck = new Deck();
    const handPlayer = document.querySelector("#player-hand");
    const handDealer = document.querySelector("#dealer-hand");
    deck.mount(handPlayer);
    deck.mount2(handDealer);
    deck.shuffle();

    const hit = document.querySelector(".js-hit");
    const stand = document.querySelector(".js-stand");
    const dealerScore=document.querySelector("#dscore");
    const playerScore=document.querySelector("#pscore");
    let count = 0;
    
    let dScore = 0;
    while(dScore < 17) {
      deck.cards[count].mount(deck.element2);
      deck.cards[count].element.style.backgroundImage=`url('/img/revers.svg')`;
      switch(deck.cards[count].rank){
        case "ace":
        dScore+=11;
        break;
        case "jack":
        dScore+=10;
        break;
        case "queen":
        dScore+=10;
        break;
        case "king":
        dScore+=10;
        break;
        default:
        dScore+=deck.cards[count].rank;
      }
      count++;
    }
    pScore=0;
    hit.addEventListener("click", () => {
        deck.cards[count].mount(deck.element);
        count++;
        switch(deck.cards[count].rank){
          case "ace":
          pScore+=11;
          break;
          case "jack":
          pScore+=10;
          break;
          case "queen":
          pScore+=10;
          break;
          case "king":
          pScore+=10;
          break;
          default:
          pScore+=deck.cards[count].rank;
        }
        playerScore.textContent="Score:"+pScore;
    });
    console.log(dealerScore.textContent);
    stand.addEventListener("click", () => {
      //dealerScore.textContent="Score:"+dScore;
      
      for(let i=0;(count-1);i++){
      deck.cards[i].element.style.backgroundImage="";
      }
      dealerScore.textContent="Score:"+dScore;

    });
});
