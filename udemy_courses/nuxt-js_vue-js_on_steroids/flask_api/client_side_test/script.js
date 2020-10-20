

fetch('http://127.0.0.1:5000/nuxtAPI/', {
    headers: {'API-Nuxt-Key' : '123#456#789'}
})
.then(res => res.json())
.then(data => console.log(data))
