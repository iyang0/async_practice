"use strict"

let BASE_CARD_URL = "http://deckofcardsapi.com/api/deck";
// http://deckofcardsapi.com/api/deck/new/shuffle/

/* Get and console log a new card from a new shuffled deck. */
async function getCardFromShuffledDeck(){
    let shuffledDeck = await axios({url :`${BASE_CARD_URL}/new/shuffle`});
    let pullCard = await axios({url: `${BASE_CARD_URL}/${shuffledDeck.data.deck_id}/draw/?count=1`});
    // or we could have been smart: TIP: replace <<deck_id>> with "new" to create a shuffled
    // deck and draw cards from that deck in the same request.

    console.log(`Suit is ${pullCard.data.cards[0].suit}, value is ${pullCard.data.cards[0].value}`);
}

/* Get a new shuffled deck and then pull two cards and console log them */
async function getTwoCardsFromShuffledDeck(){
    let shuffledDeck = await axios({url :`${BASE_CARD_URL}/new/shuffle`});
    let pullCard = await axios({url: `${BASE_CARD_URL}/${shuffledDeck.data.deck_id}/draw/?count=1`});
    let pullSecondCard = await axios({url: `${BASE_CARD_URL}/${shuffledDeck.data.deck_id}/draw/?count=1`});
    // or we could have been smart: TIP: replace <<deck_id>> with "new" to create a shuffled
    // deck and draw cards from that deck in the same request.

    console.log(`Card 1: Suit is ${pullCard.data.cards[0].suit}, value is ${pullCard.data.cards[0].value}, Card 2: Suit is ${pullSecondCard.data.cards[0].suit}, value is ${pullSecondCard.data.cards[0].value}`);
}

/* Returns a shuffled deck from the deck API */
async function getDeck(){
    let deck = await axios({url :`${BASE_CARD_URL}/new/shuffle`});

    return deck.data;
}

/* takes in a deck and returns a card, removes that card from the deck*/
async function getCard(deck) {
    let deckID = deck.deck_id;
    let cardData = await axios({url: `${BASE_CARD_URL}/${deckID}/draw/?count=1`});
    return cardData.data.cards[0];
    
}

/* Add card images to the DOM */
function putCardOnPile(card){
    let image = card.image;
    let cardImage = $("<img>").attr("src", image);
    $("#card-pile").append(cardImage);
}

/* Handle clicking on the button to add cards on table */
async function clickHandler(evt){
    
    let deck = await getDeck();
    let card = await getCard(deck);
    
    putCardOnPile(card);
}

$("#draw").on("click", clickHandler);

    
 

