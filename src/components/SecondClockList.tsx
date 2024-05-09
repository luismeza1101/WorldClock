import '../styleSheets/SecondClocksList.css'
import { CountryCity } from '../types'
import Clocks from './Clocks'

interface Props {
  appearWindow: () => void
  citys : CountryCity[]
  setArrayCitys: (newArray : CountryCity[]) => void
}

const SecondClockList: React.FC<Props> = ({appearWindow, citys, setArrayCitys}) => {

  const onlyCity: CountryCity[] = citys.map(city => {
    let data = city.split('/')
    return data[1]
  }) 

  return (
    <>
        <section className="clocks">
          <p>Clocks in the world</p>
          <button onClick={appearWindow} className='clocks__add'>Add Clock</button>
        </section>
        <aside className='list'>
          <div className='list__info'>
            <p>City</p>
            <p>Date</p>
            <p>Delete</p>
          </div>
          {onlyCity.map((city, index) => (
            <Clocks city={city} key={index} setArrayCitys={setArrayCitys} citys={citys}/>
          ))}
        </aside>
    </>
  )
}

export default SecondClockList
