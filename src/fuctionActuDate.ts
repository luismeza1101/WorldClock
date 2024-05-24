type SetState = React.Dispatch<React.SetStateAction<string>>;

export const actuDate = (
  setHours: SetState,
  setMinutes: SetState,
  setSeconds: SetState
): void => {
  const actualDate = new Date();
  const actualHours = actualDate.getHours().toString().padStart(2, "0");
  const actualMinutes = actualDate.getMinutes().toString().padStart(2, "0");
  const actualSeconds = actualDate.getSeconds().toString().padStart(2, "0");
  setHours(actualHours);
  setMinutes(actualMinutes);
  setSeconds(actualSeconds);
};

export const dataHora = async(place: string) => {
  try {
    const res = await fetch(`http://worldtimeapi.org/api/timezone/${place}`);
    const data = await res.json()
    return data.utc_offset
  } catch (error) {
    alert('Hubo un error entre la ciudad y el continente')
    throw error
  }
}

export const calcTimeCountrys = (offset: string) => {
  const hora = offset.slice(1, 3);
  const dateActual = new Date();
  const horaLocal = new Date(dateActual.getTime() + (parseInt(hora) * 3600000))
  return horaLocal;
}



