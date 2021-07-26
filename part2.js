"use strict"


let BASE_CARD_URL = "http://deckofcardsapi.com/api/deck";
// http://deckofcardsapi.com/api/deck/new/shuffle/

async function getCardFromShuffledDeck(){
    let shuffledDeck = await axios({url :`${BASE_CARD_URL}/new/shuffle`});
    let pullCard = await axios({url: `${BASE_CARD_URL}/${shuffledDeck.data.deck_id}/draw/?count=1`});
    // or we could have been smart: TIP: replace <<deck_id>> with "new" to create a shuffled
    // deck and draw cards from that deck in the same request.

    console.log(`Suit is ${pullCard.data.cards[0].suit}, value is ${pullCard.data.cards[0].value}`);
}

async function getTwoCardsFromShuffledDeck(){
    let shuffledDeck = await axios({url :`${BASE_CARD_URL}/new/shuffle`});
    let pullCard = await axios({url: `${BASE_CARD_URL}/${shuffledDeck.data.deck_id}/draw/?count=1`});
    let pullSecondCard = await axios({url: `${BASE_CARD_URL}/${shuffledDeck.data.deck_id}/draw/?count=1`});
    // or we could have been smart: TIP: replace <<deck_id>> with "new" to create a shuffled
    // deck and draw cards from that deck in the same request.

    console.log(`Card 1: Suit is ${pullCard.data.cards[0].suit}, value is ${pullCard.data.cards[0].value}, Card 2: Suit is ${pullSecondCard.data.cards[0].suit}, value is ${pullSecondCard.data.cards[0].value}`);
}

async function getDeck(){
    let deck = await axios({url :`${BASE_CARD_URL}/new/shuffle`});

    return deck.data;
}

async function getCard(deck) {
    let deckID = deck.deck_id;


}

    
 

