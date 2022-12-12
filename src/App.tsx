import './App.css';
import { createDevice, IPatcher } from "@rnbo/js";

function App() {
  let context: AudioContext;

  context = new AudioContext();

  const setup = async () => {
      let rawPatcher = await fetch("./export/patch.export.json");

      let patcher = await rawPatcher.json();

      let device = await createDevice({ context, patcher });

      // This connects the device to audio output, but you may still need to call context.resume()
      // from a user-initiated function.
      device.node.connect(context.destination);
  };




  return (
    <div className="App">
      <p>bosh</p>
      <button onClick={setup}>Hi</button>
      <button onClick={() => context.resume()}>Start</button>
      <button onClick={() => context.suspend()}>Stop</button>
    </div>
  );
}

export default App;
