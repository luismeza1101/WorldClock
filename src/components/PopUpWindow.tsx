interface Props {
    disappear: () => void
}

const PopUpWindow: React.FC<Props> = ({disappear}) => {
  return (
    <div>
        <form>
            <label htmlFor="city">City to add</label>
            <input type="text" id="city"/>
            <input type="submit" value={'Add'} onClick={disappear}/>
        </form>
    </div>
  )
}

export default PopUpWindow
