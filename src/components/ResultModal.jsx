import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  {  targetTime, reaminigTime, onReset },
  ref
) {
  const dialog = useRef();
  const lostPlayer=reaminigTime <=0;
  const formattedTimeRemainig=(reaminigTime/1000).toFixed(2)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal" open>
      {lostPlayer && <h2>You Lost !</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedTimeRemainig}</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
