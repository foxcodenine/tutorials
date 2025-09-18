import { useState } from 'react'
import "./App.scss"

// ---------------------------------------------------------------------

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

            <CounterControler count={count} step={step} updateCount={countHandler} updateStep={stepHandler}></CounterControler>

            <DisplayDate count={count}></DisplayDate>

        </div>
    )
}

// ---------------------------------------------------------------------

function StepControler({ step, updateStep }) {

    function addStep() {
        if (step < 10) updateStep(step + 1)
    }

    function subtrackStep() {
        if (step > 0) updateStep(step - 1)
    }

    function handleStep(e) {
        updateStep(Number(e.target.value))
    }

    return (
        <>
            <input value={step} type="range" min="0" max="10" onChange={handleStep} />
            <div className='date-calc__controls'>
                <button className='date-calc__button' onClick={subtrackStep}> - </button>
                <div className='date-calc__value'>Step {step}</div>
                <button className='date-calc__button' onClick={addStep}> + </button>
            </div>
        </>
    )
}

// ---------------------------------------------------------------------

function CounterControler({ count, step, updateCount, updateStep }) {

    function addCount() { updateCount(count + step) }

    function subtrackCount() { updateCount(count - step) }

    function handleCount(e) {
        updateCount(Number(e.target.value))
    }
    function handleReset() {
        updateCount(0);
        updateStep(1);
    }

    return (
        <>
            <div className='date-calc__controls'>
                <button className='date-calc__button' onClick={subtrackCount}> - </button>

                <input className='date-calc__input' type="text" value={count} onChange={handleCount} />
                <button className='date-calc__button' onClick={addCount}> + </button>
            </div>
            {(count != 0 || step != 1) && <button className='date-calc__reset' onClick={handleReset}> Reset </button>}
        </>
    )
}

// ---------------------------------------------------------------------

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

// ---------------------------------------------------------------------

export default App
