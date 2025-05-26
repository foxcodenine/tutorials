import { GOOGLE_API_KEY } from "./config";
import axios from "axios";

// ---------------------------------------------------------------------

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${enteredAddress}&key=${GOOGLE_API_KEY}`)
}

form.addEventListener('submit', searchAddressHandler);