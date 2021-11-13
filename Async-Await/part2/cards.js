const BASE_DECK = 'http://deckofcardsapi.com/api/deck/';
const DRAW_PARAMS = '/draw/?count=1';
const NEW_DECK_SHUFFLED = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';


const deck = {
    
    async getDeckID() {
        let resp = await axios.get(NEW_DECK_SHUFFLED)
        this.deckID = resp.data.deck_id;
    },
    
    async drawCard() {
        let resp = await axios.get(`${BASE_DECK}${this.deckID}${DRAW_PARAMS}`)
        this.cardImage = resp.data.cards[0].image;
        
        const container = document.querySelector('#cards');
        const newCard = document.createElement('img');
        newCard.src = this.cardImage;

        container.append(newCard);
    }
    
}


document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('button');

    deck.getDeckID();

    button.addEventListener('click', () => {
        const container = document.querySelector('#cards');
        container.innerHTML = '';

        deck.drawCard();
    });

});