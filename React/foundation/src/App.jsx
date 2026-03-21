import { useState } from 'react'

//state 组件记忆 usestate创建state
function App() {
  //写js的地方
  const [count, setCount] = useState(0)
  function add() {
    setCount((prev) => prev + 1)
  }
  const [name, setName] = useState('')

  //写html的地方
  return (
    <div>
      <button onClick={add}>按钮</button>
      <h1>{count}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default App
