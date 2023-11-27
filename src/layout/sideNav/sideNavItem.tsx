import { NavLink } from "react-router-dom";

export const SideNavItem = (props) => {
  return (
    <NavLink className="sidenav-item" to={props.path}>
      <div className="sidenav-item-icon">{props.icon}</div>
      <p>{props.label}</p>
    </NavLink>
  );
};
