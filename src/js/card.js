/*
 * A playing card
 */
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    render() {
        this.element = document.createElement("div");
        this.element.innerHTML = "";
        this.element.className = `card face-${this.rank}-of-${this.suit}`;
        this.element.style.backgroundImage = `url(img/cards/${this.rank}-of-${this.suit}.svg`;
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
        this.update();
    }

    update() {
      
    }
}
