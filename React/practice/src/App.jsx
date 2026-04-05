import './index.css'

import StepCounter from './components/01StepCounter'
import TimerLike from './components/02TimerLike'
import LoginValidator from './components/03LoginValidator'

export default function App() {
  return (
    <div className='grid'>
      <StepCounter />
      <TimerLike />
      <LoginValidator />
      {/* <FontClamp />
      <ThemePreview />
      <MiniCart />
      <TodoLite />
      <FilterPanel />
      <ProfileSubmit /> */}
    </div>
  )
}
