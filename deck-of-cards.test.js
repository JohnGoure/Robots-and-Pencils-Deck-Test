const Deck = require('./deck-of-cards');

let newDeck = new Deck();

// Verify it is a full deck by counting the cards with count().
test('A deck should have 52 cards.', () => {
    expect(newDeck.count()).toBe(52);
})

// Compare the cards in a new deck to a shuffled deck.
 test('The deck should be to shuffle.', () => {
     let temp = new Deck();
     expect(newDeck.shuffle()).not.toBe(temp.cards);
 })

 // Compare the first card in the deck to the card dealt.
 test('The deck should deal one card.', () => {
     const temp = newDeck.cards[0]
     expect(newDeck.deal()).toBe(temp);
 })
