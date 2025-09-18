import { useState } from 'react'
import "./App.scss"

function App() {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

    function stepHandler(newValue) {
        setStep(() => newValue)
    }

    function countHandler(newValue) {
        setCount(() => newValue)
    }

    return (
        <div className='date-calc'>

            <StepControler step={step} updateStep={stepHandler}></StepControler>

            <CounterControler count={count} step={step} updateCount={countHandler}></CounterControler>

            <DisplayDate count={count}></DisplayDate>

        </div>
    )
}

function StepControler({ step, updateStep }) {

    function addStep() { updateStep(step + 1) }

    function subtrackStep() { updateStep(step - 1) }

    return (
        <div className='date-calc__controls'>
            <button className='date-calc__button' onClick={subtrackStep}> - </button>
            <div className='date-calc__value'>Step {step}</div>
            <button className='date-calc__button' onClick={addStep}> + </button>
        </div>
    )
}

function CounterControler({ count, step, updateCount }) {

    function addCount() { updateCount(count + step) }

    function subtrackCount() { updateCount(count - step) }

    return (
        <div className='date-calc__controls'>
            <button className='date-calc__button' onClick={subtrackCount}> - </button>
            <div className='date-calc__value'>Count {count}</div>
            <button className='date-calc__button' onClick={addCount}> + </button>
        </div>
    )
}

function DisplayDate({ count }) {

    function getFormattedDate(addDays = 0) {
        const date = new Date();
        date.setDate(date.getDate() + addDays);
        // Format: 'Wed Jul 21 2027'
        return date.toDateString();
    }

    function getRelativeDayLabel(addDays = 0) {
        if (addDays === 0) {
            return "Today is";
        }

        const absDays = Math.abs(addDays);
        const dayWord = absDays === 1 ? "day" : "days";

        if (addDays > 0) {
            return `${absDays} ${dayWord} from today is`;
        } else {
            return `${absDays} ${dayWord} ago was`;
        }
    }

    return <p className='date-calc__result'>{getRelativeDayLabel(count)} {getFormattedDate(count)}</p>
}

export default App
