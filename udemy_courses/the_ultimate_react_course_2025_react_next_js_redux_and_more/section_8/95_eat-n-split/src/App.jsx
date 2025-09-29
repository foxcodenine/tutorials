import { useState } from 'react'

import './App.scss'

const initialFriends = [
	{
		id: 118836,
		name: "Clark",
		image: "https://i.pravatar.cc/48?u=118836",
		balance: -7,
	},
	{
		id: 933372,
		name: "Sarah",
		image: "https://i.pravatar.cc/48?u=933372",
		balance: 20,
	},
	{
		id: 499476,
		name: "Anthony",
		image: "https://i.pravatar.cc/48?u=499476",
		balance: 0,
	},
];

// ---------------------------------------------------------------------


export default function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [friends, setFriends] = useState(initialFriends);

	function handleShowAddFriend(e) {
		e.preventDefault();
		
		setShowAddFriend((showAddFriend)=>!showAddFriend)
	}

	function handleAddFriend(f) {
		setFriends(() => [...friends, f]);
		setShowAddFriend(false);
	}

	return (
		<div className='app'>
			<div className="sidebar">

				<FriendsList friends={friends} ></FriendsList>

				{showAddFriend && <FormAndFriend onAddFriend={handleAddFriend}></FormAndFriend>}

				<Button onClick={handleShowAddFriend}>
					{showAddFriend ? "Close" : "Add Friend"}
				</Button>

			</div>

			<FromSplitBill></FromSplitBill>

		</div>
	)
}

function FriendsList({friends}) {
	
	return (
		<ul>
			{friends.map(f => <Friend friend={f} key={f.id}></Friend>)}
		</ul>
	)
}

function Friend({ friend }) {
	return (
		<li>
			<img src={friend.image} alt={friend.name} />
			<h3>{friend.name}</h3>
			{friend.balance < 0 && <p className='red'>You owe {friend.name} {Math.abs(friend.balance)}$</p>}
			{friend.balance > 0 && <p className='green'>{friend.name} ownes you {friend.balance}$</p>}
			{friend.balance == 0 && <p className='gray'>You and {friend.name} are even</p>}
			<Button>{"Select"}</Button>
		</li>
	)
}

function Button({ children, onClick}) {
	return (
		<button onClick={onClick} className='button'>{children}</button>
	)
}


function FormAndFriend({onAddFriend}) {

	const [name, setName] = useState("");
	const [image, setImage] = useState("https://i.pravatar.cc/48");

	function handleName(e) {
		setName( () => e.target.value );
	}

	function handleImage(e) {
		setImage( () => e.target.value );
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (!name || !image) return;

		const id = crypto.randomUUID();

		const newFriend = {
			name, 
			image: `${image}?=${id}`, 
			balance: 0,
			id,
		};

		console.log(newFriend);

		onAddFriend(newFriend);

		setName("");
		setImage("https://i.pravatar.cc/48");
	}

	return (
		<form className="form-add-friend" onSubmit={handleSubmit}>
			<label>👤 Friend name</label>
			<input type="text" value={name} onChange={handleName}/>

			<label>🖼️ Image URL</label>
			<input type="text" value={image} onChange={handleImage} />

			<Button>{"Add"}</Button>
		</form>
	)
}

function FromSplitBill() {

	return (
		<form className="form-split-bill">
			<h2>Split a bill with X</h2>

			<label>💵 Bill value</label>
			<input type="text" />

			<label>🧍 Your expense</label>
			<input type="text" />

			<label>➗ Split bill</label>
			<input type="text" disabled/>

			<label>🙎 Who’s paying?</label>
			<select>
				<option value="user">You</option>
				<option value="Friend">X</option>
			</select>

			<Button>{"Add"}</Button>
		</form>
	)
}
