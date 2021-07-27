"use strict"

const BASE_URL = "http://numbersapi.com"

/* Gets a random fact for a number */
async function getNumberFacts(number){
    return await axios({url :`${BASE_URL}/${number}?json`})
}


/* Gets facts for a range between a min and a max */
async function getMultiNumberFacts(min, max){
    
    $("#things").empty();
    
    let results = await axios({url :`${BASE_URL}/${min}..${max}?json`});
    // debugger;
    for(let result in results.data){
        $("#things").append(`<li>${results.data[result]}</li>`);
    }
}

/* Get four facts for a single number */
async function getFourNumberFacts(number){
    
    $("#things").empty();
    
    let p1 = axios({url :`${BASE_URL}/${number}?json`});
    let p2 = axios({url :`${BASE_URL}/${number}?json`});
    let p3 = axios({url :`${BASE_URL}/${number}?json`});
    let p4 = axios({url :`${BASE_URL}/${number}?json`});
    
    // let results = [await p1, await p2, await p3, await p4];
    let results = await Promise.all([p1,p2,p3,p4]);
    
    for(let result of results){
        $("#things").append(`<li>${result.data.text}</li>`);
    }
}


