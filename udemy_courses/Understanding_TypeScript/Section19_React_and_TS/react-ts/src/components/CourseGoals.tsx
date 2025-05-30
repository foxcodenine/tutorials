// import {type FC } from "react";

type Goal = {
    id: number;
    title: string;
    description: string;
}


interface CourseGoalsProps {
    goals: Goal[];
    onDelete: (id: number) => void
}

// const CourseGoals: FC<CourseGoalsProps> = ({goals}) => {

export default function CourseGoals({goals, onDelete}: CourseGoalsProps) {
    return <ul>
        {goals.map((goals)=>(
            <li key={goals.id}>
                <article>
                    <div>
                        <h2>{goals.title}</h2>
                        <p>{goals.description}</p>
                    </div>
                    <button onClick={() => onDelete(goals.id)}>Delete</button>
                </article>
            </li>
        ))}
    </ul>
}

// export default CourseGoals;