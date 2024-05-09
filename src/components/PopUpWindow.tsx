import { useRef } from 'react'
import '../styleSheets/PopUpWindow.css'
import { CountryCity } from '../types'
import { FiX } from "react-icons/fi";

interface Props {
    disappear: () => void
    setArrayCitys: (newArray : CountryCity[]) => void
    arrayCitys: CountryCity[]
}

const PopUpWindow: React.FC<Props> = ({disappear, setArrayCitys, arrayCitys}) => {

  const cityName = useRef<HTMLInputElement>(null)
  const zoneName = useRef<HTMLSelectElement>(null)

  const addCity = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if(cityName.current?.value != '' && zoneName.current?.value != ''){
      const nameCityToFormat = cityName.current!.value;
      let formatCity = '';
      if(nameCityToFormat.includes(' ')){
        formatCity = nameCityToFormat.replace(' ', '_');
      } else {
        formatCity = nameCityToFormat.replace(nameCityToFormat[0], nameCityToFormat[0].toUpperCase());
      }
      const formatZone: CountryCity = `${zoneName.current?.value}/${formatCity}`
      setArrayCitys([...arrayCitys, formatZone])
      console.log(arrayCitys)
    } else {
      alert('Debes completar los espacios en blanco')
      return
    }
    disappear()
  }

  return (
    <div className='container'>
      <div className='window'>
          <form className='form' onSubmit={addCity}>
            <button onClick={disappear} className='form__out'><FiX /></button>
              <section className='data'>
                <div className='data__sections'>
                  <label htmlFor="city" className='data__label'>City to add : </label>
                  <input type="text" id="city" className='data__city' ref={cityName}/>
                </div>
                <div className='data__sections'>
                  <label htmlFor="zones">Zone : </label>
                  <select name="Zones" id="zones" className='zones' ref={zoneName}>
                    <option value=""></option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Antarctica">Antartida</option>
                    <option value="Asia">Asia</option>
                    <option value="Australia">Australia</option>
                    <option value="Europe">Europa</option>
                  </select>
                </div>
              <input type="submit" value={'Add'} className='form__add'/>
              </section>
          </form>
      </div>
    </div>
  )
}

export default PopUpWindow
