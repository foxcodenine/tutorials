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
	const [selectedFriend, setSelectedFriend] = useState(null);

	function handleShowAddFriend(e) {
		e.preventDefault();
		
		setShowAddFriend((showAddFriend)=>!showAddFriend)
		setSelectedFriend(null);
	}

	function handleAddFriend(f) {
		setFriends(() => [...friends, f]);
		setShowAddFriend(false);
		
	}

	function handleSelected(friend) {
		setSelectedFriend((cur) => 
			cur?.id === friend?.id ? null : friend
		)
		setShowAddFriend(null);
	}

function handleSplitBill(value) {
  setFriends((friends) =>
    friends.map((friend) =>
      // If this is the selected friend, update their balance
      friend.id === selectedFriend.id
        ? { ...friend, balance: friend.balance + value }
        // Otherwise, leave the friend unchanged
        : friend
    )
  );
}


	return (
		<div className='app'>
			<div className="sidebar">

				<FriendsList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelected}></FriendsList>

				{showAddFriend && <FormAndFriend onAddFriend={handleAddFriend}></FormAndFriend>}

				<Button onClick={handleShowAddFriend}>
					{showAddFriend ? "Close" : "Add Friend"}
				</Button>

			</div>

			{ selectedFriend && <FromSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} ></FromSplitBill> }

		</div>
	)
}

function FriendsList({friends, selectedFriend, onSelection}) {
	
	return (
		<ul>
			{friends.map(f => <Friend friend={f} key={f.id} selectedFriend={selectedFriend} onSelection={onSelection} ></Friend>)}
		</ul>
	)
}

function Friend({ friend, selectedFriend, onSelection }) {
	const isSelected = friend?.id == selectedFriend?.id
	
	return (
		<li className={ isSelected ? "selected" : "" }>
			<img src={friend.image} alt={friend.name} />
			<h3>{friend.name}</h3>
			{friend.balance < 0 && <p className='red'>You owe {friend.name} {Math.abs(friend.balance)}$</p>}
			{friend.balance > 0 && <p className='green'>{friend.name} ownes you {friend.balance}$</p>}
			{friend.balance == 0 && <p className='gray'>You and {friend.name} are even</p>}
			<Button onClick={() => onSelection(friend)}>{ isSelected ? "Close" : "Select"}</Button>
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

function FromSplitBill({ selectedFriend , onSplitBill}) {
	const [bill, setBill] = useState("");
	const [paidByUser, setPaidByUser] = useState("");
	const [payer, setPayer] = useState("user");

	const paidByFriend = bill ? bill - paidByUser : "";



	function handleSubmit(e) {
		e.preventDefault()

		if (!bill || !paidByUser) return;
		onSplitBill(payer === 'user' ? paidByFriend : -paidByUser)
	}

	return (
		<form className="form-split-bill" onSubmit={handleSubmit}>
			<h2>Split a bill with {selectedFriend.name}</h2>

			<label>💵 Bill value</label>
			<input
				type="number"
				value={bill}
				onChange={(e) => setBill(Number(e.target.value))}
			/>

			<label>🧍 Your expense</label>
			<input
				type="number"
				value={paidByUser}
				onChange={(e) => {
					const value = Number(e.target.value);
					setPaidByUser(value > bill ? paidByUser : value);
				}}
			/>

			<label>👫 {selectedFriend.name}'s expense</label>
			<input type="number" value={paidByFriend} disabled />

			<label>🙎 Who’s paying?</label>
			<select
				value={payer}
				onChange={(e) => setPayer(e.target.value)}
			>
				<option value="user">You</option>
				<option value="friend">{selectedFriend.name}</option>
			</select>

			<Button>{"Add"}</Button>
		</form>
	);
}

