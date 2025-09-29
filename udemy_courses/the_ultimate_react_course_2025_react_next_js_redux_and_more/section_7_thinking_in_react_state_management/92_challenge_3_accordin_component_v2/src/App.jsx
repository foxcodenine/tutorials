import { useState } from 'react';
import './App.scss';

const faqs = [
	{
		title: "Where are these chairs assembled?",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
	},
	{
		title: "How long do I have to return my chair?",
		text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
	},
	{
		title: "Do you ship to countries outside the EU?",
		text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
	}
];

function App() {
	return (
		<main>
			<Accordion data={faqs} />
		</main>
	);
}

function Accordion({ data }) {
	
	const [isActive, setCurOpen] = useState(null)

	function handleCurOpen(id) {
		if (id == isActive) {
			setCurOpen(isActive => null);
		} else {
			setCurOpen(isActive => id);
		}
	}


	return (
		<div className="accordion">
			{data.map((faq, i) => (
				<AccordionItem
					key={i}
					num={i + 1}
					title={faq.title}
					text={faq.text}
					isActive={isActive}
					handleCurOpen={handleCurOpen}
				/>
			))}
		</div>
	);
}

function AccordionItem({ num, title, text, isActive, handleCurOpen}) {



	return (
		<div className={`item${isActive == num ? " open" : ""}`} onClick={()=>handleCurOpen(num)}>
			<p className="number">{num < 10 ? `0${num}` : `${num}` }</p>
			<p className="title">{title}</p>
			<p className="icon">{isActive == num ? "-" : "+"}</p>
			<div className="content-box" style={{ display: isActive == num ? "block" : "none" }}>
				{text}
			</div>
		</div>
	);
}

export default App;
