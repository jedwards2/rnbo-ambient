import { useState } from 'react';
import Slider from '@mui/material/Slider';

const Drone = ({context, droneGain}: any) => {
  let  [running, setRunning] = useState(false);

   const onOffSwitch = async () => {
    if (running) {
      await context.suspend().then(() => setRunning(false));
    } else {
      await context.resume().then(() => setRunning(true));
    }
  }

  const handleChange = (e: any) => {
    droneGain.current.gain.value = (e.target.value / 100) - 1
  }

  return (
    <div className="center-div">
      <h1>Drone</h1>
      <img alt="play-pause" className="play-pause" src={running ? "images/pause.png" : "images/play.png"} onClick={() => onOffSwitch()} />
      <Slider
        key={droneGain.current.gain.value}
        size="small"
        defaultValue={(droneGain.current.gain.value + 1) * 100}
        min={0}
        max={100}
        onChange={(e) => handleChange(e)}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </div>
  )
}

export default Drone;
