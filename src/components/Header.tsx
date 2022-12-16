const Header = ({screen, setScreen, context, brown_noiseContext}: any) => {
  const suspendAll = () => {
    context.suspend()
    brown_noiseContext.suspend()
  }

  return (
    <div className="header--div">
      {screen !== "home" && <button type="button" className="header-button" onClick={() => {
        setScreen("home")
        suspendAll();
        }}>Home</button>}
      {screen !== "drone" && <button type="button" className="header-button" onClick={() => {
        setScreen("drone")
        suspendAll();
        }}>Drone</button>}
      {screen !== "brown_noise" && <button type="button" className="header-button" onClick={() => {
        setScreen("brown_noise")
        suspendAll();
        }}>Brown Noise</button>}
    </div>
  )
}

export default Header;
