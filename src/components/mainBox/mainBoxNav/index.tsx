import { NavLink } from "react-router-dom";

export const MainBoxNav = () => {
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
