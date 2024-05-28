import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  //   const [timeStarted, setTimeStarted] = useState(false);
  //   const [timeExpiried, setTimeEXpiried] = useState(false);
  // setTimeout(() => {
  //     setTimeEXpiried(true);
  //     modal.current.show();
  //   }, targetTime * 1000);
  //   setTimeStarted(true);

  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    //setTimeRemaining(targetTime * 1000); //Not Ideal to reset state. But due to If statement Its possible
    dialog.current.open();

        
  }

  function resetTime(){
    setTimeRemaining(targetTime * 1000); //Not Ideal to reset state. But due to If statement Its possible


  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimie) => prevTimie - 10);
    }, 10);
  }

  function handleFinish() {
    dialog.current.open();
    clearInterval(timer.current);
   
  }
  return (
    <>
       <ResultModal ref={dialog} targetTime={targetTime}  reaminigTime={timeRemaining} onReset={resetTime}/>

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleFinish : handleStart}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running.." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
