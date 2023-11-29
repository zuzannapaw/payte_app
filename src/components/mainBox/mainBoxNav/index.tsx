import { NavLink } from "react-router-dom";
import { FC } from "react";

/**
 * @name MainBoxNav
 * @description A MainBoxNav component
 * @returns {JSX.Element} The JSX element
 * @example
 * <MainBoxNav />
 */

export const MainBoxNav: FC = (): JSX.Element => {
  return (
    <div className="main-box-nav">
      <NavLink to="/overview/summary">Summary</NavLink>
      <NavLink to="/overview/table">Table</NavLink>
      <NavLink to="/overview/charts">Charts</NavLink>
      <NavLink to="/overview/reporting">Reporting</NavLink>
      <NavLink to="/overview/analysis">Analysis</NavLink>
    </div>
  );
};
