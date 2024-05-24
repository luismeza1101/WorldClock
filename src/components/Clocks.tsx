import '../styleSheets/Clocks.css'
import { FiXCircle } from "react-icons/fi";
import { CountryCity } from '../types';
import { calcTimeCountrys } from '../fuctionActuDate';
import { useEffect, useState } from 'react';

interface Props {
    city: CountryCity
    citys: CountryCity[]
    setArrayCitys: (newArray : CountryCity[]) => void
    date: string
}

const Clocks: React.FC<Props> = ({city, setArrayCitys, citys, date}) => {

  const [horaActual, setHoraActual] = useState<string>('');

    const deleteCity = () => {
        const newArray = citys.filter(cityToRemove => !(cityToRemove.includes(city)))
        setArrayCitys(newArray)
    }

    useEffect(() => {
        setInterval(() => {
          if(date){
            const tiempo = calcTimeCountrys(date);
            const cityHour = tiempo.getHours();
            const cityMinutes = tiempo.getMinutes();
            setHoraActual(`${cityHour}:${cityMinutes}`);
          }
        }, 1000)
    },[])
  return (
    <section className="clock">
        <p className="clock__city">{city}</p>
        <span className="clock__date">{horaActual}</span>
        <button className="clock__btn" onClick={deleteCity}><FiXCircle /></button>
    </section>
  )
}

export default Clocks
