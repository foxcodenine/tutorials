import { useRef, type FormEvent } from "react";

interface NewGoalProps {
    onAdd: (text:string, summery:string) => void
}

export default function NewGoal({onAdd}: NewGoalProps) {
    const goalRef = useRef<HTMLInputElement>(null);
    const summeryRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goalRef.current!.value;
        const enteredSummery = summeryRef.current!.value;

        onAdd(enteredGoal, enteredSummery);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input type="text" id="goal" ref={goalRef}/>
            </p>
            <p>
                <label htmlFor="summery">Short summery</label>
                <input type="text" id="summery" ref={summeryRef }/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}