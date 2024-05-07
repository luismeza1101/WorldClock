import { useState } from 'react'
import '../styleSheets/SecondClocksList.css'
import PopUpWindow from './PopUpWindow';

const SecondClockList = () => {

    const [showWindow, setShowWindow] = useState(false);

    const appearWindow = () => {
        setShowWindow(true);
    }

    const disappearWindow = () => {
        setShowWindow(false);
    }
  return (
    <>
        <section className="listClocks">
          <p>Clocks in the world</p>
          <button onClick={appearWindow}>Add Clock</button>
        </section>
        {showWindow ? <PopUpWindow disappear={disappearWindow}/> : null}
    </>
  )
}

export default SecondClockList
