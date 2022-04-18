import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./config.js";

// _____________________________________________________________________

export function timeout (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

// _____________________________________________________________________

export async function getJSON (url) {

    try {

        const res  = await Promise.race([ fetch(url), timeout( TIMEOUT_SEC )]);
        const data = await res.json();        
        // ______________________________________

       
        if (!res.ok) {
            throw new Error (`${data.message} (${res.status})`);
        }    
        // ______________________________________
        
        return data;

    } catch (err) {
        throw `helper.js -> getJSON(): ${err}`;
    }
}


// _____________________________________________________________________


export async function sendJSON (url, updoalData) {

    try {
        const fetchPro = fetch(url, {

            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updoalData)
        });



        const res = await Promise.race([ fetchPro, timeout( TIMEOUT_SEC )]);   
        const data = await res.json();     
        // ______________________________________

       
        if (!res.ok) {
            throw new Error (`${data.message} (${res.status})`);
        }    
        // ______________________________________
        
        return data;    

    } catch (err) {
        throw `helper.js -> getJSON(): ${err}`;
    }
}