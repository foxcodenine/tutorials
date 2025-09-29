import { useState } from "react";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearItems }) {
	const [sortBy, setSortBy] = useState('input');

	let sortedItems;

	switch (sortBy) {
		case "description":
			sortedItems = items.slice()
							.sort((a, b) => a.description.localeCompare(b.description)) 
			break;
		case "packed":
			sortedItems = items.slice()
							.sort((a, b) => Number(a.packed) - Number(b.packed)) 

			break;
		default:
			sortedItems = [...items];
			break;
	}

	return (
		<div className="list">
			<ul style={{ overflow: "auto" }}>
				{sortedItems.map(item => (
					<Item
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
						key={item.id}
						item={item}
					/>
				))}
			</ul>
			<div className="actions">
				
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value) }>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>

				<button onClick={ ()=>{ onClearItems() } }>Clear</button>
			</div>
		</div>
	)
}


function Item({ item, onDeleteItem, onToggleItem }) {
	return (
		<li>
			<input
				type='checkbox'
				value={item.packed}
				onChange={() => onToggleItem(item.id)}
			/>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => { onDeleteItem(item.id) }}>✖️</button>
		</li>
	)
}
