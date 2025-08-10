import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  const style = { color };

  const handleClick = () => {
    setCount(count + 1);
    toggleColor();
  };

  return (
    <div>
      <h2 style={style}>Count: {count}</h2>
      <button onClick={handleClick}>Count & Toggle Color</button>
    </div>
  );
}
