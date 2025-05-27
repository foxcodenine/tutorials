// Import the API key and axios for HTTP requests
import { GOOGLE_API_KEY } from "./config";
import axios from "axios";

// ---------------------------------------------------------------------
// Select form and input elements from the DOM
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

// ---------------------------------------------------------------------
// Define the expected response shape from the Google Geocoding API
type GoogleGeocodingResponse = {
    results: {
        geometry: {
            location: {
                lat: number,
                lng: number
            }
        }
    }[],
    status: 'OK' | 'ZERO_RESULTS',
}

// Declare google object to access the Maps API
declare var google: any;

// ---------------------------------------------------------------------
// Handle form submission and search for the address
function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    // Send GET request to Google Geocoding API
    axios.get<GoogleGeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`
    )
    .then(response => {
        // Handle unsuccessful response
        if (response.data.status != 'OK') {
            throw new Error('Could not fetch coordinates');
        }

        // Extract latitude and longitude from response
        const coordinates = response.data.results[0].geometry.location;

        let map;

        // Initialize the map and marker
        async function initMap() {
            const { Map } = await google.maps.importLibrary("maps");

            // Create the map centered on the fetched coordinates
            map = new Map(document.getElementById("map"), {
                center: coordinates,
                zoom: 10,
            });

            // Add a marker at the searched location
            new google.maps.Marker({ position: coordinates, map });
        }

        // Call the map initialization function
        initMap();
    })
    .catch(err => {
        // Display error messages
        alert(err.message);
        console.log(err);
    });
}

// ---------------------------------------------------------------------
// Register the form submission handler
form.addEventListener('submit', searchAddressHandler);
