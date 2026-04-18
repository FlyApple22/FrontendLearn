import './index.css'

import StepCounter from './components/01StepCounter'
import TimerLike from './components/02TimerLike'
import LoginValidator from './components/03LoginValidator'
import FontClamp from './components/04FontClamp'
// import ThemePreview from './components/05.ThemePreview'
import ToDoList from './components/07TodoLite '

export default function App() {
  return (
    <div className='grid'>
      <StepCounter />
      <TimerLike />
      <LoginValidator />
      <FontClamp />
      {/* <ThemePreview />
      <MiniCart /> */}
      <ToDoList />
      {/* <FilterPanel />
      <ProfileSubmit /> */}
    </div>
  )
}
