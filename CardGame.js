// const suits =            
// const values = 
// const rank = 

class Poker {

    constructor(suits, values, rank){
        this.suits = ['hearts', 'diamonds', 'spades', 'clubs']; 
        this.values = '2,3,4,5,6,7,8,9,10,J,Q,K,A'.split(",");
        this.rank = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        this.deck = [];
        this.hands = {};
        this.holeCard = [];
        this.communityCard = [];
    }

    createDeck() {
        const {suits, values, deck} = this;
        for(let suit of suits){
            for(let value of values){
                deck.push({suit: suit, value: value})
            }
        }
    }

    // Fisher-Yactes shuffle
    shuffle(){
        const {deck} = this;
        for(let deckIdx = deck.length - 1; deckIdx > 0; deckIdx--){
            let randNum = Math.floor(Math.random() * deck.length);
            [deck[deckIdx], deck[randNum]] = [deck[randNum], deck[deckIdx]];
        }
    }

    drawHoleCard(numOfCards = 2){
        const {deck, holeCard} = this; 
        for(let i = 0; i < numOfCards; i++){
            let card = deck.pop();
            holeCard.push(card);
        }  
    }

    drawCommunityCard() {
        const {deck, communityCard} = this;
        for(let i = 0; i < 5; i++){
            let card = deck.pop();
            communityCard.push(card);
        }  
    }

    clearHand(){
        const {holeCard} = this;
        holeCard.splice(0, holeCard.length);
    }

    checkHand(){

    }
    // checkHand = (holeCard, communityCard) => {

        
        // const unique = (value, index, self) => {
        //     return self.indexOf(value) === index
        // }

        // const combination = [...holeCard, ...communityCard];            

        // if((combination.filter(unique).length === 1) & (Object.values(combination).filter(n => n === "10" || n ==="J" || n === "Q" || n === "K" || n === "A").length === 5)){
        //     return true;
        // }
    // }

}

const dealer = new Poker()
dealer.createDeck()
dealer.shuffle()
dealer.drawHoleCard()
dealer.drawCommunityCard()
// dealer.checkHand()
dealer.clearHand()
