# Usage
How to use this module.

## Install
Clone the repo.

Go to the directory where this repo is saved and type `npm install` in the terminal.

After npm finishes installing the dependencies type `npm run test` to test the module.

Type `npm run watch` to automate the testing.

## deck-of-cards
deck-of-cards.js has 3 methods. 

### count()
count() : count returns the number of cards in the deck.

Example:

``` 
const Deck = require('./deck-of-cards');

let newDeck = new Deck();
console.log(newDeck.count()) // 52
```

### shuffle()
shuffle(): shuffle shuffles the cards in a random order and returns a list of the shuffled cards.

```
const Deck = require('./deck-of-cards');

let newDeck = new Deck();
console.log(newDeck.shuffle())
```

### deal()
deal(): deal removes the top card and returns it.

```
const Deck = require('./deck-of-cards');

let newDeck = new Deck();
console.log(newDeck.deal())
```

## Tests

The tests check the functionality of each method in a new deck. 