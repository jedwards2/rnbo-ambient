/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Drone from './components/Drone';
import { useEffect, useState } from 'react';
import { createDevice } from "@rnbo/js";

function App() {
  let [screen, setScreen] = useState("home");

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



  return (
    <div className="App">
      <Header setScreen={setScreen} context={context}/>
      {screen === "home" && <Home />}
      {screen === "drone" && <Drone context={context}/>}
    </div>
  );
}

export default App;
