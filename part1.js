"use strict"

const BASE_URL = "http://numbersapi.com"

async function getNumberFacts(number){
    return await axios({url :`${BASE_URL}/${number}?json`})
}

async function getMultiNumberFacts(min, max){
    
    $("#things").empty();
    
    let results = await axios({url :`${BASE_URL}/${min}..${max}?json`});
    // debugger;
    for(let result in results.data){
        $("#things").append(`<li>${results.data[result]}</li>`);
    }
}


async function getFourNumberFacts(number){
    
    $("#things").empty();
    
    let p1 = axios({url :`${BASE_URL}/${number}?json`});
    let p2 = axios({url :`${BASE_URL}/${number}?json`});
    let p3 = axios({url :`${BASE_URL}/${number}?json`});
    let p4 = axios({url :`${BASE_URL}/${number}?json`});
    
    let results = [await p1, await p2, await p3, await p4];
    
    for(let result of results){
        $("#things").append(`<li>${result.data.text}</li>`);
    }
}

