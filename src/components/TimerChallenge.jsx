import { useState } from "react";
export default function TimerChallenge({ title, targetTime }) {
  const [timeStarted, setTimeStarted] = useState(false);

  const [timeFinished, setTimeFinished] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setTimeFinished(true);
    }, targetTime * 1000);
    setTimeStarted(true)
  }

  
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeFinished && <p>You lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timeStarted?'Stop':'start'} challenge
        </button>
      </p>
      <p className={timeStarted?'active':undefined}>
        {timeStarted?'Time is Running...':'Time is Inactive'}
      </p>
    </section>
  );
}
