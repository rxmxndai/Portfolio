import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="nav-brand">
        Roman K
      </a>

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
        <span className="res-bar"> </span>
        <span className="res-bar"> </span>
        <span className="res-bar"> </span>
        <span className="res-bar"> </span>
        <span className="res-bar"> </span>
      </div>
    </nav>
  );
};

export default Navbar;
