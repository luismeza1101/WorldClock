import '../styleSheets/SecondClocksList.css'
import Clocks from './Clocks'

interface Props {
  appearWindow: () => void
}

const SecondClockList: React.FC<Props> = ({appearWindow}) => {
  
  return (
    <>
        <section className="clocks">
          <p>Clocks in the world</p>
          <button onClick={appearWindow} className='clocks__add'>Add Clock</button>
        </section>
        <aside className='list'>
          <Clocks />
          <Clocks />
          <Clocks />
        </aside>
    </>
  )
}

export default SecondClockList
