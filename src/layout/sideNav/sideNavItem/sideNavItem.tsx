import { NavLink } from "react-router-dom";
import { FC } from "react";
import { SideNavItemProps } from "./types";

export const SideNavItem: FC<SideNavItemProps> = (
  props: SideNavItemProps
): JSX.Element => {
  return (
    <NavLink className="sidenav-item" to={props.path}>
      <div className="sidenav-item-icon">{props.icon}</div>
      <p>{props.label}</p>
    </NavLink>
  );
};
