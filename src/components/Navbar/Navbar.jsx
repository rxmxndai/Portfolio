import "./navbar.scss";
import { useState } from "react";
import NavElement from "./navElement";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Menu from "./menu";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toogleMenu, setToogleMenu] = useState(false);
  const navList = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "About",
      link: "#about",
    },
    {
      id: 3,
      name: "Projects",
      link: "#projects",
    },
    {
      id: 4,
      name: "Skills",
      link: "#skills",
    },
    {
      id: 5,
      name: "Contact",
      link: "#contacts",
    },
  ];

  const makeActive = (item) => {
    setActive(item);
  };

  return (
    <div className={toogleMenu ? "navbar active" : "navbar"} id="navbar">
      {/* //////////////////////////////////////////////////////////////////////////////////////  */}
      <ul className="side-menu">
        {navList.map((nav) => (
          <Menu
            link={nav.link}
            name={nav.name}
            toogleMenu={toogleMenu}
            setToogleMenu={setToogleMenu}
          />
        ))}
        </ul>

      {/* //////////////////////////////////////////////////////////////////////////////////////  */}
      <div className={toogleMenu ? "Container active " : "Container"}>
        <div className="Wrapper">
          <h1 className="Logo">
            Port<span>folio</span>
          </h1>

          {/* //////////////////////////////////////////////////////////////////////////////////////  */}

          <div className="Right">
            <ul className="Menu">
              {navList.map((nav) => (
                <NavElement
                  link={nav.link}
                  name={nav.name}
                  active={active}
                  makeActive={makeActive}
                />
              ))}
            </ul>

            {/* //////////////////////////////////////////////////////////////////////////////////////  */}
            <div className="ham-menu">
              <a
                onClick={() => {
                  setToogleMenu(!toogleMenu);
                }}
              >
                {toogleMenu ? <ImCross /> : <GiHamburgerMenu />}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
