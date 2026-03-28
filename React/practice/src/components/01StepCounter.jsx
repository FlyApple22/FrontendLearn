//    * 【题目：步进计数器】
//    *
//    * 场景：
//    * 你在做“报名人数控制”组件。运营希望可以用两种步长调整人数：
//    * - 普通模式：每次 +1 / -1
//    * - 快速模式：每次 +5 / -5
//    *
//    * 规则（必须严格实现）：
//    * 1) 人数范围：0 ~ 50（不能小于0，不能大于50）
//    * 2) 有一个“模式切换”按钮：普通 <-> 快速
//    * 3) 有 + 和 - 两个按钮，根据模式变化步长
//    * 4) 当人数到 0 时，“-”按钮要禁用；到 50 时，“+”按钮要禁用
//    * 5) 页面要显示：
//    *    - 当前人数
//    *    - 当前模式（普通/快速）
//    *    - 当前步长（1 或 5）
//    *
//    * 提示：
//    * - 建议用两个 state：count + fast
//    * - 步长 step 用派生值（不要用 state）

import { useState } from 'react'

function StepCounter() {
  const [count, setCount] = useState(0)
  const [fast, setFast] = useState(false)
  const step = fast ? 5 : 1

  function dec() {
    setCount((prev) => prev - step)
  }

  function inc() {
    setCount((prev) => prev + step)
  }

  return (
    <div>
      <h1>当前人数：{count}</h1>
      <h1>当前模式：{fast ? '快速' : '普通'}</h1>
      <button disabled={count === 0} onClick={dec}>
        —
      </button>
      <button disabled={count === 50} onClick={inc}>
        +
      </button>
      <button onClick={() => setFast((p) => !p)}>模式</button>
    </div>
  )
}

export default StepCounter
