import '../styleSheets/Clocks.css'
import { FiXCircle } from "react-icons/fi";
import { CountryCity } from '../types';

interface Props {
    city: CountryCity
    citys: CountryCity[]
    setArrayCitys: (newArray : CountryCity[]) => void
}

const Clocks: React.FC<Props> = ({city, setArrayCitys, citys}) => {

    const deleteCity = () => {
        const newArray = citys.filter(cityToRemove => !(cityToRemove.includes(city)))
        setArrayCitys(newArray)
    }
  return (
    <section className="clock">
        <p className="clock__city">{city}</p>
        <span className="clock__date">00:00:00</span>
        <button className="clock__btn" onClick={deleteCity}><FiXCircle /></button>
    </section>
  )
}

export default Clocks
