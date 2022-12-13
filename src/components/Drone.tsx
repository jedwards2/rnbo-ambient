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
      <img alt="play-pause" className="play-pause" src={running ? "images/pause.png" : "images/play.png"} onClick={() => onOffSwitch()} />
    </div>
  )
}

export default Drone;
