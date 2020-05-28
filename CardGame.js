const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A'.split(",");

class Poker {

    constructor(suits, values){
        this.suits = suits;
        this.values = values;
        this.deck = [];
        this.hands = {};
    }
    
    createDeck = () => {
        for(let suit of this.suits){
            for(let value of this.values){
                this.deck.push({suit: suit, value: value})
            }
        }
    }

    // Fisher-Yactes shuffle
    shuffle = () => {
        for(let deckIdx = this.deck.length - 1; deckIdx > 0; deckIdx--){
            let randNum = Math.floor(Math.random() * this.deck.length);
            [this.deck[deckIdx], this.deck[randNum]] = [this.deck[randNum], this.deck[deckIdx]];

        }
    }

    drawCard = (numOfCards) => {
        
        for(let i = 0; i < numOfCards; i++){

            let card = Math.floor(Math.random() * this.deck.length);

        }
    }

}

class Player extends Poker{

}

class Dealer extends Poker{

}