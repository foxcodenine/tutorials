//
// https://github.com/axios/axios


// _____________________________________________________________________

let  formSignup = document.getElementById('form-signup');

formSignup.addEventListener('submit', async (e)=>{

    e.preventDefault();

    let url = 'http://s179017901.onlinehome.us/discoveryvip/'
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;

    const myData = `fullname=${fullname}&email=${email}`

    // axios.post(url, myData)
    // .then(data => console.log(data))
    // .catch(error => console.log(error))

    const myDataObject = await dataGetPost(url, myData);

    console.log(myDataObject)

    const myString = `
        Form submited successfully,  \
        Email: ${myDataObject.data.email}  Name: ${myDataObject.data.fullname}`

    document.querySelector('.output p').innerText = myString;

});

async function dataGetPost(url, data) {

    const myData = await axios.post(url, data);   

    return myData;
}