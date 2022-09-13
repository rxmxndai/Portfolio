import "./navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar' id="navbar">
      <div className="Container">
        <div className="Wrapper">
          <h1 className="Logo">Portfolio</h1>
          <div className="Right">
            <ul className="Menu">
            <li className="MenuItems"> <a className="active" href="#home"> Home </a> </li>
            <li className="MenuItems"> <a href="#about"> About </a> </li>
              <li className="MenuItems"> <a href="#skills"> Skills </a> </li>
              <li className="MenuItems"> <a href="#projects"> Projects </a> </li>
            </ul>
          </div>
          </div>
          </div>
    </div>
  );
};

export default Navbar;
