/**
 * 【题目：登录校验】
 *
 * 场景：
 * 你在做一个最小版登录框，需要“账号 + 密码”，并在界面上实时给出校验提示。
 *
 * 已知规则（直接照着做，不用学生自己想）：
 * 1) 账号规则：至少 3 个字符
 * 2) 密码规则：至少 6 个字符
 * 3) 登录按钮：
 *    - 当账号或密码不满足规则时：按钮禁用
 *    - 满足规则时：按钮可点击
 * 4) 点击登录：
 *    - 显示提示文案：`欢迎你，{username}`
 *
 * UI 提示要求：
 * - 账号输入框下面显示：
 *   - 不满足： "账号至少 3 个字符"
 *   - 满足：   "账号OK"
 * - 密码输入框下面显示：
 *   - 不满足： "密码至少 6 个字符"
 *   - 满足：   "密码OK"
 *
 * 提示：
 * - 用 3 个 state：username / password / msg
 * - “是否满足”建议用派生变量（不要做成 state）
 */

import { useState } from 'react'

function LoginValidator() {
  const [username, setUsename] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <div style={{ display: 'grid', gap: 8 }}>
        <input
          placeholder='请输入账号'
          value={username}
          onChange={(e) => {
            setUsename(e.target.value)
          }}
        />
        <input
          type='password'
          placeholder='请输入密码'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button>登录</button>
      </div>
    </div>
  )
}

export default LoginValidator
