export default function Stats({items}) {
	let numItems = items.length;
	let numPacked = items.filter(item => item.packed == true).length;
	let percentage = Math.round(numPacked/numItems * 100);

	if (!numItems) return <footer className='stats'><em>Start adding some items to your packing list ✈️</em></footer>
	
	return (
		<footer className='stats'>
			<em>
				{percentage == 100 ? 
					`you got everything! Ready to go ✈️`:
					`🎒 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`	
				}
			</em>
		</footer>
	)
}