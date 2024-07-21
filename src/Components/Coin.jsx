import { useState } from "react";

function Coin() {
  const [currentFace, setCurrentFace] = useState("");
  const [head, setHead] = useState(0); // will use it to count how many heads
  const [tail, setTail] = useState(0); // will use it to count how many tails

  const flipCoin = () => {
    // const flip =[head,tail];

    const randFlip = Math.random() < 0.5 ? "head" : "tail";
    setCurrentFace(randFlip);
    if (randFlip === "head") {
      setHead(head + 1);
    } else if (randFlip === "tail") {
      setTail(tail + 1);
    }
    console.log(currentFace);
  };
  return (
    <div>
      <button onClick={flipCoin}>Flip The Coin</button>
      <p>currentFace:{currentFace}</p>
      <p>Heads count:{head}</p>
      <p>Tail count:{tail}</p>
    </div>
  );
}

export default Coin;
