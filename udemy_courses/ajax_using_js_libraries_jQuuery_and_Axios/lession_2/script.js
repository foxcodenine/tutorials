$('document').ready(()=>{
    $('#goodLink').click((e)=>{
        alert('Thanks for visiting!');
    })
})

$('document').ready(()=>{
    $('#badLink').click((e)=>{
        alert('As you can see, the link no longer took you to jquery.com!');
        e.preventDefault();
    })
})