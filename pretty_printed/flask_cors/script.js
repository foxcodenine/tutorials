const getFromPythonApi = async function () {
    const resp =  await fetch('http://127.0.0.1:5000/api');
    const data = await resp.json();
    return data
}




async function init()  {

    const data = await getFromPythonApi() ;

    document.getElementById('display').innerText = data.data;
    
}

init();