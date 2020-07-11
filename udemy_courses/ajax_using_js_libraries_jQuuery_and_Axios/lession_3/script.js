$('.hello').click(()=>{
    $.ajax({
        dataType:'json',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        success:success
    })
    .done(() => console.log('DONE'))
})


function success(data, status, xhr) {
    console.log(data);
    console.log(status);   
    console.log(xhr);   

    $('.output').html(`
    
    <h3>${data.title}</h3>
    <p>${data.body}</p>
    
    `)
}