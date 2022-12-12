const Header = ({setScreen, context, context440}: any) => {
  const suspendAll = () => {
    context.suspend()
    context440.suspend()
  }

  return (
    <div className="header--div">
      <button type="button" onClick={() => {
        setScreen("home")
        suspendAll();
        }}>Home</button>
      <button type="button" onClick={() => {
        setScreen("drone")
        suspendAll();
        }}>Drone</button>
      <button type="button" onClick={() => {
        setScreen("drone440")
        suspendAll();
        }}>Drone440</button>
    </div>
  )
}

export default Header;
