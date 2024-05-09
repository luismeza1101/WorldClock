import { useState } from 'react';
import './App.css'
import MainClock from './components/MainClock';
import SecondClockList from './components/SecondClockList';
import PopUpWindow from './components/PopUpWindow';
import { CountryCity } from './types';

function App() {

  const [arrayCitys, setArrayCitys] = useState<CountryCity[]>(['Europe/London','America/New_York','America/Cancun','America/Vancouver','Europe/Berlin','Europe/Rome'])
  const [showWindow, setShowWindow] = useState(false);
  // const [clocks, setClocks] = useState<ClockCity[]>([]);

  // const dataHora = async() => {
  //   const res = await fetch("http://worldtimeapi.org/api/timezone");
  //   const data = await res.json()
  //   console.log(data)
  // }
  // dataHora();

    const appearWindow = () => {
      if(arrayCitys.length == 6){
        alert('No puedes agregar mas de 6 ciudades ')
      } else {
        setShowWindow(true);
      }
    }

    const disappearWindow = () => {
        setShowWindow(false);
        // setClocks([...clocks, city])
    }

  return (
    <div className='bodyContainer'>
      <main className='hero'>
        <MainClock /> 
        <SecondClockList appearWindow={appearWindow} citys={arrayCitys} setArrayCitys={setArrayCitys}/>
      </main>
      {showWindow ? <PopUpWindow disappear={disappearWindow}/> : null}
    </div>
  )
}

export default App
