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



