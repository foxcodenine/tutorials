import { useState } from 'react'

import './App.scss'

export default function App() {



	return (
		<div>
			<TextExpander>
				Space travel is the ultimate adventure! Imagine soaring past the stars
				and exploring new worlds. It's the stuff of dreams and science fiction,
				but believe it or not, space travel is a real thing. Humans and robots
				are constantly venturing out into the cosmos to uncover its secrets and
				push the boundaries of what's possible.
			</TextExpander>

			<TextExpander
				collapsedNumWords={20}
				expandButtonText="Collapse text"
				collapseButtonText="Show text"
				buttonColor="#ff6622"
				expanded={true}
			>
				Space travel requires some seriously amazing technology and
				collaboration between countries, private companies, and international
				space organizations. And while it's not always easy (or cheap), the
				results are out of this world. Think about the first time humans stepped
				foot on the moon or when rovers were sent to roam around on Mars.
			</TextExpander>

			<TextExpander
				expanded={true}
				className="box"
			>
				Space missions have given us incredible insights into our universe and
				have inspired future generations to keep reaching for the stars. Space
				travel is a pretty cool thing to think about. Who knows what we'll
				discover next!
			</TextExpander>
		</div>
	)
}


function TextExpander({
	children, 
	collapsedNumWords=12, 
	expanded="false", 
	expandButtonText="show less", 
	collapseButtonText="read more", 
	buttonColor="blue", 
	className=""
}) {

	const [collapsed, setCollapsed] = useState( !expanded);

	function toggleCollapsed() {
		setCollapsed(() => !collapsed)
	}

	const expandedText = children;

	const myArray = expandedText.split(" ");

	const collapsedText = `${myArray.slice(0, collapsedNumWords).join(" ")}...`;

	return (
		<div className={className}>
			{collapsed ?  collapsedText : expandedText }
			&nbsp;
			<span style={{'color': buttonColor, 'cursor': 'pointer'}} onClick={toggleCollapsed}>{collapsed ?  collapseButtonText : expandButtonText }</span>
		</div>
	);
}

