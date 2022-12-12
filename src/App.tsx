/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useEffect, useState } from 'react';
import { createDevice } from "@rnbo/js";

function App() {
  let  [running, setRunning] = useState(false);
  let [context, setContext] = useState(new AudioContext())

  useEffect(() => {
    setup()
  }, [])

  const setup = async () => {
      let rawPatcher = await fetch("./export/patch.export.json");

      let patcher = await rawPatcher.json();

      let device = await createDevice({ context, patcher });

      device.node.connect(context.destination);
  };

  const onOffSwitch = async () => {
    if (running) {
      await context.suspend().then(() => setRunning(false));
    } else {
      await context.resume().then(() => setRunning(true));
    }
  }

  return (
    <div className="App">
      <button onClick={() => onOffSwitch()}>{running ? "Stop" : "Start"}</button>
    </div>
  );
}

export default App;
