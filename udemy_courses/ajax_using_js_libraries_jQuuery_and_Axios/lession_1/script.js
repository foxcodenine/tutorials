// $('.class');  or  jQuery('#id');
// 
// $.ajax({url:'address_string'}).done().fail();
// 
// jQuery('#clickMe').text();
// 
// $('element').click(function);
// 
// $('#myDiv').html(`<h2>My Div</h2>`)


// _____________________________________________________________________
// Selecting the button and its innerText changing the innerText in 2
// different ways:

console.log(jQuery('button')[0].textContent)

jQuery('button')[0].textContent = 'My Button'

console.log(jQuery('#clickMe').text())

// _____________________________________________________________________

// Setting an event listenre on the button:

$('#clickMe').click(()=>{
    webData();
});

// ____________________________

// Ajax call with jQuery:

function webData() {
    $.ajax({
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/posts/1',
        // dataType:'text',
        dataType:'json'
    })
    .done(output)
    .fail((e)=>{
        console.log('error', e)
    })
}

// ____________________________


function output(data) {
    $('#output').html(`<h2>${data.title}</h2><p>${data.body}</p>`)
    console.log(data);
}