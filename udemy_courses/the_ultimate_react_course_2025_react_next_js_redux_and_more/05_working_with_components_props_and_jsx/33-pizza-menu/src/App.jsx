import "./App.scss";
import React from "react";


function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	)
}

// =====================================================================

function Header() {
	const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
	return (
		<header className="header">
			{/* <h1 style={style} >Fast React Piza Co.</h1> */}
			<h1>Fast React Piza Co.</h1>
		</header>
	)
}

// ---------------------------------------------------------------------

function Menu() {

	return (
		<main className="menu">
			<h2>Our menu</h2>
			{pizzaData.length > 0 && (
				<React.Fragment key="jejej">
					<p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>

					<ul className="pizzas">
						{pizzaData.map(pizza => (<Pizza pizzaObj={pizza} key={pizza.name} />))}
					</ul>
				</React.Fragment>
			)
			}
		</main>
	)
}
// ---------------------------------------------------------------------

function Pizza(props) {
	// if (props.pizzaObj.soldOut) return null;

	return (
		<li className={`pizza ${props.pizzaObj.soldOut ? 'sold-out' : ''}`}>
			<img src={props.pizzaObj.photoName} alt={props.pizzaObj.photoName} />
			<div>
				<h3>{props.pizzaObj.name}</h3>
				<p>{props.pizzaObj.ingredients}</p>
				<span>{props.pizzaObj.soldOut ? "Solid out" : props.pizzaObj.price + 3}</span>
			</div>
		</li>
	)
}

// ---------------------------------------------------------------------

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;

	const isOpen = hour >= openHour && hour < closeHour;
	const underMaintenance = false;


	if (underMaintenance) {
		return <footer className="footer"><p>Sorry, we're down for scheduled maintenance right meow.</p></footer>
	}

	return (
		<footer className="footer">
			<div className="order">
				{isOpen ? (
					<Order closeHour={closeHour}></Order>
				) : (
					<p>Sorry we're close. We will open at {openHour}:00.</p>
				)}


			</div>
		</footer>
	)
}

function Order({ closeHour }) {
	return (
		<>
			<p>We're open until {closeHour}:00. Cone visit us or order online.</p>
			<button className="btn">Order</button>
		</>
	)
}

// =====================================================================

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];


export default App
