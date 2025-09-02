
import './App.scss'

const skills = [
  { skill: "Vue.js", level: "Very high", color: "#e67e22" },
  { skill: "Laravel (PHP)", level: "Very high", color: "#3498db" },
  { skill: "Linux (Admin)", level: "Very high", color: "#2ecc71" },
  { skill: "Golang", level: "High", color: "#9b59b6" },
  { skill: "Node JS", level: "High", color: "#e74c3c" },
  { skill: "TypeScript", level: "High", color: "#1abc9c" },
  { skill: "JavaScript", level: "High", color: "#f1c40f" },
  { skill: "PostgreSQL", level: "Medium-high", color: "#e84393" },
  { skill: "MySQL", level: "Medium-high", color: "#16a085" },
  { skill: "Docker", level: "Medium-high", color: "#e74c3c" },
  { skill: "RabbitMQ", level: "Medium-high", color: "#8e44ad" },
  { skill: "Redis", level: "Medium", color: "#2d3436" },
  { skill: "Apache", level: "Medium", color: "#00cec9" },
  { skill: "SASS/SCSS", level: "Medium", color: "#d35400" },
  { skill: "React", level: "Low-medium", color: "#6c5ce7" },
  { skill: "MongoDB", level: "Low-medium", color: "#fd79a8" },
  { skill: "Python", level: "Low", color: "#0984e3" },
  { skill: "Kubernetes", level: "Low", color: "#636e72" },
];


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

function getLevelEmoji(level) {
  switch (level) {
    case "Very high":
      return "😈"; // Genius brain
    case "High":
      return "🚀"; // Rocket — flying high
    case "Medium-high":
      return "💪"; // Strong arm — solid
    case "Medium":
      return "👌"; // OK hand — decent
    case "Low-medium":
      return "🛠️"; // Wrench — still building
    case "Low":
      return "🧪"; // Test tube — experimenting
    default:
      return "❓"; // Unknown level
  }
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
				{skills.map(s => <SkillList skill={s.skill} emoji={getLevelEmoji(s.level)} color={s.color}></SkillList>)}
			</ul>
		</div>
	)
}


function SkillList({color, skill, emoji}) {
	return (
		<li className='skill' style={{"background": color}}>
			<span>{skill}</span>
			<span>{emoji}</span>			 
		</li>
	)
}

export default App
