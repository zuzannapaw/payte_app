import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";

const icons = { faHouse: faHouse };

export const SideNavItem = (props) => {
  return (
    <NavLink className="sidenav-item" to={props.path}>
      <FontAwesomeIcon className="sidenav-item-icon" icon={icons[props.icon]} />
      <p>{props.label}</p>
    </NavLink>
  );
};
