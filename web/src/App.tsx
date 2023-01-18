import './App.css'
import './styles/global.css'
import { Habit } from './components/Habit/Habit'

function App() {

  return (
    <div>
     <Habit completed={3}/>
     <Habit completed={10}/>
     <Habit completed={30}/>
    </div>
  )
}

export default App
