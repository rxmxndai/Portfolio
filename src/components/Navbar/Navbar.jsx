import './Navbar.css'
import '../app.js'

const Navbar = () => {
  return (
    <div>
      {/* Logo */}
    <nav className="navbar">
      <a href="#" className="nav-brand">
        Roman K
      </a>

    {/* Nav Links */}
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#" className="nav-link"> Home </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link"> About </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link"> Skills </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link"> Projects </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link"> Contacts </a>
        </li>
      </ul>


      <div className="hamburger">
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>

    </nav>

    </div>
  );
};

export default Navbar;
