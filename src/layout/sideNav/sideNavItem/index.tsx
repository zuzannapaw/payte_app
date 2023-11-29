import { NavLink } from "react-router-dom";
import { FC } from "react";
import { SideNavItemProps } from "./types";

/**
 * @name SideNavItem
 * @description A SideNavItem component
 * @param {SideNavItemProps} props The props of the component
 * @returns {JSX.Element} The JSX element
 * @example
 * <SideNavItem path="/pathname" icon={<Icon/>} label="Label"/>
 */

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
