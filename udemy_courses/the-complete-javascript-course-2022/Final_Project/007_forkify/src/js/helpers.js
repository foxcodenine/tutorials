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

        const res = await Promise.race([ fetch(url), timeout( TIMEOUT_SEC )]);        
        // ______________________________________
        
        if (!res.ok) {
            throw new Error (`${data.message} (${res.status})`);
        }    
        // ______________________________________
        
        return await res.json();    

    } catch (err) {
        throw err;
    }
}


// _____________________________________________________________________