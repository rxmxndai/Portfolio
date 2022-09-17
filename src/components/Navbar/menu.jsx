import './navbar.scss'


const menu = ( { link, name, toogleMenu, setToogleMenu } ) => {
  return (
    <li className="side-menu-list">
      <a
        className="side-item"
        href={link}
        onClick={() => setToogleMenu(!toogleMenu) }
      >
        {name}
      </a>
    </li>
  )
}

export default menu