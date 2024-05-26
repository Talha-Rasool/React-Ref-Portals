import { useState, useRef } from "react";
export default function Player() {
  const userInput = useRef();

  // const[userName,setUserName]=useState('');
  const [showName, setShowName] = useState(null);

  // function handleChange(event){
  //   setShowName(false);
  //   setUserName(event.target.value)
  // }

  function handleClick() {
    setShowName(userInput.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {showName ?? "unknown entity"}</h2>
      <p>
        <input ref={userInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
