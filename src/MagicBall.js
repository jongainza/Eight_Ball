import React, { useState } from "react";
import "./MagicBall.css";
import Messages from "./Messages";

const MagicBall = (props) => {
  console.log(props.messages);
  const [text, setText] = useState("Think of a question");
  const [col, setCol] = useState("black");
  const [counts, setCounts] = useState({ red: 0, green: 0, goldenrod: 0 });

  const newMsg = () => {
    let ram = Math.floor(Math.random() * props.messages.length);
    setText(props.messages[ram].msg);
    setCol(props.messages[ram].color);
    setCounts((prevCounts) => ({
      ...prevCounts,
      [props.messages[ram].color]: prevCounts[props.messages[ram].color] + 1,
    }));
  };
  const reset = () => {
    setText("Think of a question");
    setCol("black");
    setCounts({ red: 0, green: 0, goldenrod: 0 });
  };

  const Initial = col === "black";

  const functionality = () => {
    return (
      <div>
        <button onClick={reset}>Reset</button>
        <p>Green responses: {counts.green}</p>
        <p>Goldenrod responses: {counts.goldenrod}</p>
        <p>Red responses: {counts.red}</p>
      </div>
    );
  };

  return (
    <>
      <div
        className="MagicBall"
        style={{ backgroundColor: col }}
        onClick={newMsg}
      >
        <h1 className="MagicBall-Text">{text}</h1>
      </div>
      {Initial ? null : functionality()}
      {/* <p>Green responses: {counts.green}</p>
      <p>Goldenrod responses: {counts.goldenrod}</p>
      <p>Red responses: {counts.red}</p> */}
    </>
  );
};

export default MagicBall;
