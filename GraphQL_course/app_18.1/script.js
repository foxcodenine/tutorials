async function init(){
	const result = await fetch('http://localhost:8008/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			// 'Access-Control-Allow-Origin' : "*",
			// 'Access-Control-Allow-Headers': '*'			
		},
		body: JSON.stringify({query: "{name,email,age,isDeveloper}" }),
	});
	
	const data = await result.json();
	
	console.log(data);
}

init();

