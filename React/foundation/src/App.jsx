import { useState } from "react";

function App() {
  //写js的地方
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  //写html的地方
  return (
    <div>
      <h1>当前数值:{count} </h1>
      <button onClick={add}>点击加1</button>
    </div>
  );
}

export default App;
