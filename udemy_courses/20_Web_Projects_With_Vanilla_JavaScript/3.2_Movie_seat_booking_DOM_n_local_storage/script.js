
// !e.target.classList.contains('occupied')     <-contains
// localStorage.setItem()
// HTMLSelectElement.selectedIndex
// localStorage.getItem()
// JSON.stringify()
// JSON.parse()

// getting elements form document
let elements = {
    container: document.querySelector('.container'),
    allSeats: document.querySelectorAll('.row .seat'),
    seats: document.querySelectorAll('.row .seat:not(.occupied)'),
    seat: document.querySelector('.row .seat:not(.occupied)'),
    seatsSelected: document.querySelectorAll('.row .seat.selected'),
    count: document.getElementById('count'),
    total: document.getElementById('total'),
    movieSelect: document.getElementById('movie')

}

// Setting the ticket price
let ticketPrice = elements.movieSelect.value


// Get date from localStorage and populate UI 
function populateUI() {

    // Setting the seat UI
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  
    // Setting the the movie UI
    if (selectedSeats !== null && selectedSeats.length > 0) {
        elements.allSeats.forEach((seat, index) => {
            
            if (selectedSeats.includes(index) && !seat.matches('.row .seat.occupied')) {
                seat.classList.add('selected');
            }
            // Setting the the count and total
            updateSelectedCount();
        });
    };
}


populateUI();





// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // Copy selected seats into arr
    // Map through array
    // Return a new array index
    // Stringify arr 
    // Save it to local storage

    const seatsIndex = [...selectedSeats].map((seat => {
        return [...elements.allSeats].indexOf(seat);
    }))
    
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    // Updating UI
    const selectedCount = selectedSeats.length;
    elements.count.innerText = selectedCount;
    elements.total.innerText = selectedCount * ticketPrice;
};

// Save selected movie index and price

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('movieIndex', movieIndex);
    localStorage.setItem('moviePrice', moviePrice);
}

// EventListener - Select movie
elements.movieSelect.addEventListener('change', e => {
    
    // Save movie data to localStorage function
    setMovieData(e.target.selectedIndex, e.target.value)

    // Update total and count UI function
    ticketPrice = elements.movieSelect.value;
    updateSelectedCount();

    const selectedMovieIndex = localStorage.getItem('movieIndex');
    const selectedMoviePrice = localStorage.getItem('moviePrice');

    if (selectedMovieIndex === null) {
        elements.movieSelect.selectedIndex = selectedMovieIndex;
    }

})


// EventListener - Select seat
elements.container.addEventListener('click', e => {

    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');    
    
    updateSelectedCount();
    }

});