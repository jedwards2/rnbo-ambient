/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Drone from './components/Drone';
import Drone440 from './components/Drone440';
import { useEffect, useState } from 'react';
import { createDevice } from "@rnbo/js";

function App() {
  let [screen, setScreen] = useState("home");

  let [context, setContext] = useState(new AudioContext())
  let [context440, setContext440] = useState(new AudioContext())

  useEffect(() => {
    setup();
  }, [])

  const setup = async () => {
      let rawPatcher = await fetch("./export/patch.export.json");
      let rawPatcher440 = await fetch("./export/440drone.export.json");

      let patcher = await rawPatcher.json();
      let patcher440 = await rawPatcher440.json();

      let device = await createDevice({ context: context, patcher });
      let device440 = await createDevice({context: context440, patcher: patcher440});

      device.node.connect(context.destination);
      device440.node.connect(context440.destination);
  };



  return (
    <div className="App">
      <Header screen={screen} setScreen={setScreen} context={context} context440={context440}/>
      <div id="main">
        {screen === "home" && <Home />}
        {screen === "drone" && <Drone context={context}/>}
        {screen === "drone440" && <Drone440 context={context440}/>}
      </div>

    </div>
  );
}

export default App;
