
import './App.scss'

function App() {
	return (
		<Card></Card>
	)
}

function Card() {
	return (
		<div className="card">
			<Avatar></Avatar>
			<Data></Data>
		</div>
	)
}

function Avatar() {
	return (
		<img
			src="http://localhost:5173/1749752579810.jpeg"
			alt=""
			className="avatar"
			// style={{ height: "500px" }}
		/>
	);
}

function Data() {
	return (
		<div className='data'>
			<h1>Chris Farrugia</h1>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting 
				industry. Lorem Ipsum has been the industry's standard dummy 
				text ever since the 1500s, when an unknown printer took a galley 
				of type and scrambled it to make a type specimen book. It has 
				survived not only five centuries, but also the leap into 
				electronic typesetting, remaining essentially unchanged..
			</p>
			<ul className="skill-list">
				<SkillList skill="Golang JS" emoji="😺" color="#00ADD8"></SkillList>
				<SkillList skill="Vue JS" emoji="😍" color="#41B853"></SkillList>
				<SkillList skill="TS" emoji="😈" color="#235A97"></SkillList>
				<SkillList skill="Linux" emoji="🎃" color="#843b80"></SkillList>
				<SkillList skill="Laravel" emoji="😵" color="#fb503b"></SkillList>
				<SkillList skill="Postgress" emoji="🤖" color="#336791"></SkillList>
				<SkillList skill="RabbitMQ" emoji="🤢" color="#F37E01"></SkillList>
				<SkillList skill="Docker" emoji="👻" color="#364B51"></SkillList>
			</ul>
		</div>
	)
}


function SkillList(props) {
	return (
		<li className='skill' style={{"background": props.color}}>
			{props.skill} {props.emoji}
		</li>
	)
}

export default App
