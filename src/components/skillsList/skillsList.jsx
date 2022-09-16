import './skillsList.scss'


const skillsList = ( { id, title, active, setActive } ) => {
  return (
    <li className={active ? "projectList active": "projectList"} onClick={ () => { setActive(id) }} >
        {title}
    </li>
  )
}
export default skillsList;