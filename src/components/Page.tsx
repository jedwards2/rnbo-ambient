import { useState } from 'react';
import Slider from '@mui/material/Slider';

const Page = ({title, context, gainNode}: any) => {
  let  [running, setRunning] = useState(false);

   const onOffSwitch = async () => {
    if (running) {
      await context.current.suspend().then(() => setRunning(false));
    } else {
      await context.current.resume().then(() => setRunning(true));
    }
  }

  const handleChange = (e: any) => {
    gainNode.current.gain.value = ((e.target.value / 100) * 3) - 1
  }

  return (
    <div className="center-div">
      <h1>{title}</h1>
      <img alt="play-pause" className="play-pause" src={running ? "images/pause.png" : "images/play.png"} onClick={() => onOffSwitch()} />
      <Slider
        key={gainNode.current.gain.value}
        size="small"
        defaultValue={0}
        min={0}
        max={100}
        onChange={(e) => handleChange(e)}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </div>
  )
}

export default Page;
