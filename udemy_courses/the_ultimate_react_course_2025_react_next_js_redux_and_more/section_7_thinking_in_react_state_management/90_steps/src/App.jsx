import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);


    function handlePrevious() {
        if (step > 1) {
            // setStep(step - 1)
            setStep((s) => s - 1)
        }
    }

    function handleNext() {
        if (step < 3) {
            // setStep(step + 1)
            setStep((s) => s + 1)
        }
    }


    return (
        <>
            <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
            {
                isOpen &&
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>

                    <StepMessage step={step}>{messages[step - 1]}</StepMessage>

                    <div className="buttons">
                        <Button bgColor={'#7950f2'} txtColor={'#fff'} text={"Previous"} action={handlePrevious} ><span>⬅️</span>Previous</Button>
                        <Button bgColor={'#7950f2'} txtColor={'#fff'} text={"Next"} action={handleNext} >Next<span>➡️</span></Button>
                    </div>
                </div>
            }

        </>
    )
}


function StepMessage({step, children}) {
    return (
        <p className="message"><h3>Step {step} </h3>{children}</p>
    )
}

function Button({action, bgColor, txtColor, children}) {

    return (
        <button style={{ backgroundColor: bgColor, color: txtColor }} onClick={action}>{children}</button>
    )
}