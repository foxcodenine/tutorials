import { useState } from 'react'


import './App.scss'

export default function App() {
	const [bill, setBill] = useState(0)
	const [tipPer1, setTipPer1] = useState(0)
	const [tipPer2, setTipPer2] = useState(0)

	function handleSetTipPer1(tip) { setTipPer1(()=>tip); }
	function handleSetTipPer2(tip) { setTipPer2(()=>tip); }

	const tipPercent = (Number(tipPer1) + Number(tipPer2)) / 2;

	function handleUpdateBill(e) {
		setBill(()=>e.target.value);
	}

	function handleRest(e) {
		e.preventDefault();
		setBill(0);
		setTipPer1(0);
		setTipPer2(0);
	}

	return (
		<>
			<form className="bill-form">

				<Bill bill={bill} onUpdateBill={handleUpdateBill}></Bill>

				<Tip onUpdateTip={handleSetTipPer1}><label>How did you like the service?</label></Tip>

				<Tip onUpdateTip={handleSetTipPer2}><label>How did your friend like the service?</label></Tip>


				<BillResult bill={bill} tipPercent={tipPercent}></BillResult>

				<Button bill={bill} onReset={handleRest}></Button>
			</form>
		</>
	)
}

function Bill({bill, onUpdateBill}) {
	return (
		<div className="bill-form__group">
			<label>How much was the bill?</label>
			<input type="number" value={bill} onChange={(e)=>{onUpdateBill(e)}}/>
		</div>
	)
}

function Tip({onUpdateTip, children}) {
	return (
		<div className="bill-form__group">
			{children}
			<select onChange={(e)=>{onUpdateTip(e.target.value)}}>
				<option value={0}>Dissatisfied (0%)</option>
				<option value={5}>It was ok (5%)</option>
				<option value={10}>It was good (10%)</option>
				<option value={20}>Absolutely amazing! (20%)</option>
			</select>
		</div>
	)
}

function BillResult({bill, tipPercent}) {
	const tip = bill * tipPercent / 100;
	return (
		<div className="bill-form__result">
			You pay <span>${bill}</span> (${bill} + ${tip} tip)
		</div>
	)
}

function Button({bill, onReset}) {

	return (
		<>
		{
			bill > 0g  && 		
			<div className="bill-form__actions">
				<button onClick={(e)=>{onReset(e)}} className="bill-form__button">Reset</button>
			</div>
		}
		</>
	)
}