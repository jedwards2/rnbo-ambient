const Header = ({screen, setScreen, context, context440}: any) => {
  const suspendAll = () => {
    context.suspend()
    context440.suspend()
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
      {screen !== "drone440" && <button type="button" className="header-button" onClick={() => {
        setScreen("drone440")
        suspendAll();
        }}>Drone440</button>}
    </div>
  )
}

export default Header;
