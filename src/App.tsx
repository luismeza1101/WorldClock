import { useState } from 'react';
import './App.css'
import MainClock from './components/MainClock';
import SecondClockList from './components/SecondClockList';
import PopUpWindow from './components/PopUpWindow';

function App() {

  const [showWindow, setShowWindow] = useState(false);

    const appearWindow = () => {
        setShowWindow(true);
    }

    const disappearWindow = () => {
        setShowWindow(false);
    }

  return (
    <div className='bodyContainer'>
      <main className='hero'>
        <MainClock /> 
        <SecondClockList appearWindow={appearWindow}/>
      </main>
      {showWindow ? <PopUpWindow disappear={disappearWindow}/> : null}
    </div>
  )
}

export default App
