import { useEffect, useState } from 'react'
import '../styleSheets/SecondClocksList.css'
import { CountryCity } from '../types'
import Clocks from './Clocks'
import { dataHora } from '../fuctionActuDate'

interface Props {
  appearWindow: () => void
  citys : CountryCity[]
  setArrayCitys: (newArray : CountryCity[]) => void
}

const SecondClockList: React.FC<Props> = ({appearWindow, citys, setArrayCitys}) => {

  const [offsets, setOffsets] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchDataForCities = async () => {
      try {
        const promises: Promise<string>[] = citys.map(city => dataHora(city));
        const results = await Promise.all(promises);
        return results
      } catch (error) {
        console.error('Hubo un error al obtener los datos:', error);
      }
    };
    
    fetchDataForCities().then(results => {
      if (results !== undefined) {
        setOffsets(results);
      }
    });
  }, [citys]);
  
  const onlyCity: string[] = citys.map(city => {
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
            <Clocks city={city} key={index} setArrayCitys={setArrayCitys} citys={citys} date={offsets[index]}/>
          ))}
        </aside>
    </>
  )
}

export default SecondClockList
