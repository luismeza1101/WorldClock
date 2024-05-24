import { useEffect, useState } from "react";
import "./App.css";
import MainClock from "./components/MainClock";
import SecondClockList from "./components/SecondClockList";
import PopUpWindow from "./components/PopUpWindow";
import { CountryCity } from "./types";
import { actuDate } from "./fuctionActuDate";

function App() {
  const [arrayCitys, setArrayCitys] = useState<CountryCity[]>([
    "Europe/London",
    "America/New_York",
    "America/Cancun",
    "America/Vancouver",
    "Europe/Berlin",
    "Europe/Rome",
  ]);
  const [showWindow, setShowWindow] = useState(false);
  const [hours, setHours] = useState<string>("0");
  const [minutes, setMinutes] = useState<string>("0");
  const [seconds, setSeconds] = useState<string>("0");

  useEffect(() => {
    setInterval(() => {
      actuDate(setHours, setMinutes, setSeconds);
    }, 1000);
  }, []);

  const appearWindow = () => {
    if (arrayCitys.length == 6) {
      alert("No puedes agregar mas de 6 ciudades ");
    } else {
      setShowWindow(true);
    }
  };

  const disappearWindow = () => {
    setShowWindow(false);
  };

  return (
    <div className="bodyContainer">
      <main className="hero">
        <MainClock hours={hours} minutes={minutes} seconds={seconds} />
        <SecondClockList
          appearWindow={appearWindow}
          citys={arrayCitys}
          setArrayCitys={setArrayCitys}
        />
      </main>
      {showWindow ? (
        <PopUpWindow
          disappear={disappearWindow}
          setArrayCitys={setArrayCitys}
          arrayCitys={arrayCitys}
        />
      ) : null}
    </div>
  );
}

export default App;
