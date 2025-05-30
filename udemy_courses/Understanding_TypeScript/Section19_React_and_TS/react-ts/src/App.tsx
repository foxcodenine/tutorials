
import Header from "./components/Header.tsx";
import CourseGoals from "./components/CourseGoals.tsx";
import goalsImg from './assets/goals.jpg'
import { useState } from "react";



function App() {
	const [goals, setGoals] = useState([
		{
			id: 1,
			title: "Learn TS",
			description: "Learn TS from the ground up"
		},
		{
			id: 2,
			title: "Practics TS",
			description: "Practics work with TS"
		}
	]);
	function handleDeleteGoal(id:number) {
		setGoals((prevGoals) => {	
			return prevGoals.filter(goal => goal.id !== id);
		})

	}
	return (
		<main>
			<Header image={{ src: goalsImg, alt: 'A list of goals' }}>
				<h1>Your Course Goals</h1>
			</Header>
			<CourseGoals goals={goals} onDelete={ handleDeleteGoal } />
		</main>
	)
}

export default App;