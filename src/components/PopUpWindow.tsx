import '../styleSheets/PopUpWindow.css'

interface Props {
    disappear: () => void
}

const PopUpWindow: React.FC<Props> = ({disappear}) => {
  return (
    <div className='container'>
      <div className='window'>
          <form className='form'>
              <section className='data'>
                <label htmlFor="city" className='data__label'>City to add : </label>
                <input type="text" id="city" className='data__city'/>
              </section>
              <input type="submit" value={'Add'} onClick={disappear} className='form__add'/>
          </form>
      </div>
    </div>
  )
}

export default PopUpWindow
