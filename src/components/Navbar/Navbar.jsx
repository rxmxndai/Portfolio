import "./navbar.scss";



const Navbar = () => {
  return (
    <div className='navbar' id="navbar">
      <div className="Container">
        <div className="Wrapper">
          <h1 className="Logo">Roman</h1>
          <div className="Right">
            <ul className="Menu">
              <li className="MenuItems"> <a href="#home"> Home </a> </li>
              <li className="MenuItems"> <a href="#about"> About </a> </li>
              <li className="MenuItems"> <a href="#skills"> Skills </a> </li>
              <li className="MenuItems"> <a href="#projects"> Projects </a> </li>
            </ul>

            {/* <button className='Button'>Hire now</button> */}
          </div>
          </div>
          </div>
    </div>
  );
};

export default Navbar;
