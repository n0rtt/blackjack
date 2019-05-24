
const sCase=(p,score)=>{
  
  switch(p){
    case "ace":
    score+=11;
    break;
    case "jack":
    score+=10;
    break;
    case "queen":
    score+=10;
    break;
    case "king":
    score+=10;
    break;
    default:
    score+=p;
  }
  return(score);
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
    let pScore=0;
    while(dScore < 17) {
      deck.cards[count].mount(deck.element2);
      deck.cards[count].element.style.backgroundImage=`url('/img/revers.svg')`;
      dScore=sCase(deck.cards[count].rank,dScore);
      count++;
    }

    hit.addEventListener("click", () => {
        deck.cards[count].mount(deck.element);
        pScore=sCase(deck.cards[count].rank,pScore);
        playerScore.textContent="Score:"+pScore;
        count++;
    });

    stand.addEventListener("click", () => {      
      for(let i=0;i<count;i++){
      deck.cards[i].element.style.backgroundImage="";
      }
      dealerScore.textContent="Score:"+dScore;
      
    });
});
