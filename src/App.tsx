/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Page from './components/Page';
import { useEffect, useRef, useState } from 'react';
import { createDevice } from "@rnbo/js";

function App() {
  let [screen, setScreen] = useState("home");
  let [context, setContext] = useState(new AudioContext());
  let [brown_noiseContext, setBrown_NoiseContext] = useState(new AudioContext());

  let droneGain = useRef(context.createGain());
  let brownGain = useRef(brown_noiseContext.createGain());

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
      let rawPatcher = await fetch("./export/patch.export.json");
      let rawPatcherBrown = await fetch("./export/brown_noise.export.json");

      let patcher = await rawPatcher.json();
      let patcherBrown = await rawPatcherBrown.json();

      let device = await createDevice({ context: context, patcher });
      let deviceBrown = await createDevice({context: brown_noiseContext, patcher: patcherBrown});

      device.node.connect(context.destination);
      deviceBrown.node.connect(brown_noiseContext.destination);

      droneGain.current.connect(context.destination);
      droneGain.current.gain.value = -1;
      device.node.connect(droneGain.current);

      brownGain.current.connect(brown_noiseContext.destination);
      brownGain.current.gain.value = -1;
      deviceBrown.node.connect(brownGain.current);
  };



  return (
    <div className="App">
      <Header screen={screen} setScreen={setScreen} context={context} brown_noiseContext={brown_noiseContext}/>
      <div id="main">
        {screen === "home" && <Home />}
        {screen === "drone" && <Page title={"Drone"} context={context} gainNode={droneGain}/>}
        {screen === "brown_noise" && <Page title={"Brown Noise"} context={brown_noiseContext} gainNode={brownGain}/>}
      </div>

    </div>
  );
}

export default App;
