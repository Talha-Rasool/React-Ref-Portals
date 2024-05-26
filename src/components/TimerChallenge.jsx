import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const modal = useRef();

  const [timeStarted, setTimeStarted] = useState(false);

  const [timeExpiried, setTimeEXpiried] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeEXpiried(true);
      modal.current.show();
    }, targetTime * 1000);
    setTimeStarted(true);
  }

  function handleFinish() {
    clearTimeout(timer.current);
  }
  return (
    <>
      {timeExpiried && (
        <ResultModal ref={modal} targetTime={targetTime} result="lost" />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeStarted ? handleFinish : handleStart}>
            {timeStarted ? "Stop" : "Start"} challenge{" "}
          </button>
        </p>
        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Time is running.." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
