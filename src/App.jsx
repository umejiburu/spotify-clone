import { useState } from 'react'
import Login from './Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* {!userDetails && <Login/>} */}

      <Login/>

        <div className='background'></div>
    </div>
  )
}

export default App
