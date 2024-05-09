import '../styleSheets/MainClock.css'

interface Props {
  hours: string
  minutes: string
  seconds: string
}

const MainClock: React.FC<Props> = ({hours, minutes, seconds}) => {
  return (
    <section className="mainClock">
      {`${hours}:${minutes}:${seconds}`}
    </section>
  )
}

export default MainClock
