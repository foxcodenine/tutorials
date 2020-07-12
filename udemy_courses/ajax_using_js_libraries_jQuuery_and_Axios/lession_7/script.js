// $.ajax()
// https://api.jquery.com/jquery.ajax/


// _____________________________________________________________________

$('#form-signup').submit((e)=>{
    
    // console.log('form submit', e);
    e.preventDefault();


    const myData = {
        fullname: $('input[id="fullname"]').val(),
        email: $('input[id="email"').val(),
    }


    let url = 'http://s179017901.onlinehome.us/discoveryvip/';


    $.ajax({
        
        url: url,
        type: 'post',
        data: myData,
        success: data => {

            console.log(data)

            $('#output p').text(`
                Form Send Successfully  - 
                Full Name: ${data.fullname} Email: ${data.email}
            `)
        },
        statusCode: {
            404: () => alert('page not found')
        }
        
    })


});