const Header = ({setScreen, context}: any) => {
  return (
    <div className="header--div">
      <button type="button" onClick={() => {
        setScreen("home")
        context.suspend();
        }}>Home</button>
      <button type="button" onClick={() => setScreen("drone")}>Drone</button>
    </div>
  )
}

export default Header;
