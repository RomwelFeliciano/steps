import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 1;

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Doggo" });

  function handlePrevious() {
    // alert("Previous");
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    // alert("Next");
    if (step < 3) setStep(step + 1);

    // BAD PRACTICE
    // test.name = "Catty";

    // setTest({ name: "Catty" });
  }

  function handleToggle() {
    setIsOpen(!isOpen);
    setStep(1);
  }

  return (
    <>
      <button className="close" onClick={handleToggle}>
        {isOpen ? <span>&times;</span> : "+"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onCl
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
