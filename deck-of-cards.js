let suit = {
    heart: "heart",
    spade: "spade",
    club: "club",
    diamond: "diamond"
}

let rank = {
    ace: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    ten: "10",
    jack: "11",
    queen: "12",
    king: "13"
}

class Card {
    constructor(cardSuit, cardRank) {
        this.suit = cardSuit;
        this.rank = cardRank;
    }
}

module.exports = class Deck {
    // Build the deck of cards
    constructor() {
        this.cards = [];
        for (let s in suit) {
            for (let r in rank) {
                this.cards.push(new Card(s, r));
            }
        }
    }

    // Give the number of cards in the deck
    count() {
        return this.cards.length;
    }
    
    // Shuffle the cards
    shuffle() {
        // Use an iterator to swap the cards 52 times.
        // Swap with a random card
        for (let x = 0; x < 52; x++) {
            this.swap(x, Math.floor(Math.random() * 52));
        }
        return this.cards;
    }

    // Take the card off the top of the array.
    deal() {
        return this.cards.shift();
    }

    // Take the two positions and swap them.
    swap(positionA, positionB) {
        let temp = new Card(this.cards[positionA].suit, this.cards[positionA].rank);
        this.cards[positionA] = this.cards[positionB];
        this.cards[positionB] = temp;
    }
}
