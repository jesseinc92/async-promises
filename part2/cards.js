const BASE_URL = 'http://deckofcardsapi.com/api/deck/';
const SHUFFLE_NEW_DECK = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
let deckID;
let cardImage;


document.addEventListener('DOMContentLoaded', () => {

    axios.get(SHUFFLE_NEW_DECK)
        .then(resp => {
            deckID = resp.data.deck_id;
        });

});

const cardContainer = document.querySelector('#cards');
const newCardButton = document.querySelector('button');
const newCard = document.createElement('img');

newCardButton.addEventListener('click', () => {

    axios.get(`${BASE_URL}${deckID}/draw/?count=1`)
        .then(resp => {
            cardImage = resp.data.cards[0].image;

            newCard.src = cardImage;
            cardContainer.append(newCard);
        });

});