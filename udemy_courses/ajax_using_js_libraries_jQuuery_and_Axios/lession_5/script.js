// $.get(url, function)
// $.getJSON(url, function)

// _____________________________________________________________________

$('.flight').click(webData);


function webData() {
    let url = 'https://api.spacexdata.com/v2/launches';
    $.getJSON(url, output);
}

function output(data) {

    let markup = '<ul>';

    $.each(data, (k, v) => {
        markup += `
        <li class='box-gray'>${k}</li>
        <li class='box-white'>${v.mission_name} - ${v.launch_year}</li> 
        <li class='box-white hidden' id='li${k}'>${v.details} </li> `
       
        
    })

    markup += '</ul>';

    $('.output').html(markup);

    $('li').hover((e)=>{
        console.log(11)
        
        const num = e.target.innerText

        $(`#li${num}`).removeClass('hidden');
    })

    $('li').mouseleave((e)=>{
        console.log(11)
        
        const num = e.target.innerText

        $(`#li${num}`).addClass('hidden');
    })


}

