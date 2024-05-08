import '../styleSheets/Clocks.css'
import { FiXCircle } from "react-icons/fi";

const Clocks = () => {
  return (
    <section className="clock">
        <p className="clock__city">Lima</p>
        <span className="clock__date">00:00:00</span>
        <button className="clock__btn"><FiXCircle /></button>
    </section>
  )
}

export default Clocks
