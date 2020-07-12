// $.get(url, function)
// $.getJSON(url, function)

// _____________________________________________________________________

$('.flight').click(webData);


function webData() {
    let url = 'https://api.spacexdata.com/v2/launches';
    $.get(url, output);
}

function output(data) {
    const flight_number = $('.number').val() - 1;
    // console.log(flight_number);
    console.log(data[flight_number]);
    const flt = data[flight_number];

    $('.output').html(`
    
    <h3>${flt.flight_number} - ${flt.mission_name} - ${flt.launch_year}</h3>
    <p>${flt.details}</p>   
    
    `)




}