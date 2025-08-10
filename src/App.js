import { useState } from "react";
import Stopwatch from "./Stopwatch";
import Counter from "./Counter";
import NameForm from "./NameForm";
import CommentList from "./CommentList";

export default function App() {
  const [color, setColor] = useState("blue");
  const [count, setCount] = useState(0);

  const toggleColor = () => {
    setColor((prev) => (prev === "blue" ? "red" : "blue"));
  };

  const handleClick = () => {
    setCount((c) => c + 1);
    toggleColor();
  };

  return (
    <>
      <Stopwatch />
      <NameForm />
      <div>
        <Counter count={count} color={color} onClick={handleClick} />
        <CommentList color={color} />
      </div>
    </>
  );
}
