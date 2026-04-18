/**
 * 【题目：Todo Lite】
 *
 * 场景：
 * “今日计划”列表：可以添加任务、标记完成、删除任务。
 *
 * 固定数据结构：
 * 每个 todo 必须长这样：
 * { id: number, text: string, done: boolean }
 *
 * 规则：
 * 1) 输入框输入内容，点击“添加”：
 *    - 如果是空字符串/全空格：不添加
 *    - 添加后清空输入框
 * 2) 列表展示 todo：
 *    - done 为 true 时：文字显示删除线
 * 3) 每条 todo 有两个按钮：
 *    - “完成/取消”：切换 done
 *    - “删除”：移除该项
 *
 * 关键要求：
 * - 必须用不可变更新：map / filter / 展开运算符
 */

import { useState } from 'react'

function ToDoList() {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState([{ id: 1, text: '', done: false }])

  function add() {
    const newTodo = { id: Date.now(), text: text, done: false }
    setTodo((prev) => [...prev, newTodo])
    setText('')
  }

  return (
    <>
      <div>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={add}>添加</button>
      </div>
      <div>
        <ul>
          {todo.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
        <button>{}</button>
        <button>删除</button>
      </div>
    </>
  )
}

export default ToDoList
