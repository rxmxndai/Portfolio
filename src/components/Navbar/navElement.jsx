import './navbar.scss'

const navElement = ({ link, name, active, makeActive}) => {
  return (
    <li className="MenuItems">
      <a
        className={active === name ? "item active" : "item"}
        href={link}
        onClick={ () => { makeActive(name) }}
      >
        {name}
      </a>
    </li>
  );
};

export default navElement;
