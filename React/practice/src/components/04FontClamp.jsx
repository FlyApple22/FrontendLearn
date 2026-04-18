/**
 * 【题目：阅读器字号调节】
 *
 * 场景：
 * 你在做“阅读模式”。用户可以调节字号，但字号必须在范围内。
 *
 * 规则：
 * 1) 初始字号：16
 * 2) 最小字号：12；最大字号：28
 * 3) 有三个按钮：
 *    - A-：字号 -2（到最小就不能再减，按钮禁用）
 *    - A+：字号 +2（到最大就不能再加，按钮禁用）
 *    - 重置：直接回到 16
 * 4) 文本区域必须实时应用字号（style={{ fontSize: size }})
 */

import { useState } from 'react'

function FontClamp() {
  const [size, setSize] = useState(16)
  function add() {
    if (size < 28) {
      setSize(size + 2)
    }
  }
  function dec() {
    if (size > 12) setSize(size - 2)
  }
  function reSet() {
    setSize(16)
  }
  return (
    <>
      <div>
        <p style={{ fontSize: size }}>这是一段文案</p>
        <button onClick={add} disabled={size >= 28}>
          A+
        </button>
        <button onClick={dec} disabled={size <= 12}>
          A-
        </button>
        <button onClick={reSet}>重置</button>
        <p>字号大小{size}</p>
      </div>
    </>
  )
}

export default FontClamp
