import { useState } from 'react';

const Drone = ({context}: any) => {
  let  [running, setRunning] = useState(false);

   const onOffSwitch = async () => {
    if (running) {
      await context.suspend().then(() => setRunning(false));
    } else {
      await context.resume().then(() => setRunning(true));
    }
  }

  return (
    <div>
      <h1>Drone</h1>
      <button onClick={() => onOffSwitch()}>{running ? "Stop" : "Start"}</button>
    </div>
  )
}

export default Drone;
