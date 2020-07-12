// $.post()


// _____________________________________________________________________

$('#form-signup').submit((e)=>{
    
    // console.log('form submit', e);
    e.preventDefault();

    let fullname = $('input[id="fullname"]').val();
    let email = $('input[id="email"]').val();

    console.log(fullname);
    console.log(email);


    let url = 'http://s179017901.onlinehome.us/discoveryvip/';

    $.post(
        url=url, {
            name:fullname,
            email:email
        }        
    ).done((data) => {
        console.log(data);
    })

});