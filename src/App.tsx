import './App.css'
import MainClock from './components/MainClock';
import SecondClockList from './components/SecondClockList';

function App() {

  const obtenerHora = async () =>{
    const res = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
    const data = await res.json()

    console.log(data)
  }

  obtenerHora();
  return (
    <div className='hero'>
      <MainClock /> 
      <SecondClockList />
    </div>
  )
}

export default App
