import { useState } from 'react'
import './App.scss'
import { useEffect } from 'react';

function App() {

	const [amount, setAmount] = useState(0);
	const [currency1, setCurrency1] = useState("USD");
	const [currency2, setCurrency2] = useState("EUR");

	const [ newAmount, setNewAmount ] = useState(0);

	const [ isLoading, setIsLoading] = useState(false);

	function handleSetAmount(i) {
		let v = Number(i);
		if (v) { setAmount(v); }

	}
	function handleSetCurrency1(i) {
		setCurrency1(i);
	}
	function handleSetCurrency2(i) {
		setCurrency2(i);
	}

	function handleSetNewAmount(i) {
		setNewAmount(i);
	}

	useEffect(() => {
		if (amount === 0) {
			handleSetNewAmount(0);
			return;
		}
		if (currency1 === currency2) {
			handleSetNewAmount(amount);
			return;
		}
		setIsLoading(true);
		async function fetchConvertedAmount() {
			const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${currency1}&to=${currency2}`;
			const res = await fetch(url);
			const data = await res.json();

			handleSetNewAmount(data.rates[currency2]);
		}

		fetchConvertedAmount();
		setIsLoading(false);

	}, [amount, currency1, currency2]);


	return (
		<div className="App">
			<input
				disabled={isLoading}
				type="text"
				value={amount}
				onInput={(e) => handleSetAmount(e.target.value)}
			/>
			<div className="converter-controls">
				<select disabled={isLoading} value={currency1} onChange={(e) => handleSetCurrency1(e.target.value)}>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
					<option value="CAD">CAD</option>
					<option value="INR">INR</option>
				</select>
				<select disabled={isLoading} value={currency2} onChange={(e) => handleSetCurrency2(e.target.value)}>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
					<option value="CAD">CAD</option>
					<option value="INR">INR</option>
				</select>
			</div>
			{isLoading ? <Loader /> : <p>{newAmount}</p>}
		</div>
	)
}


function Loader() {
	return (
		<div className="loader">
			<div className="spinner"></div>
		</div>
	)
}

export default App
