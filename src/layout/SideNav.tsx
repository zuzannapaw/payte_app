import { NavLink } from "react-router-dom";

export const SideNav = () => {
  return (
    <nav className="nav">
      <NavLink to="/overview">Overview</NavLink>

      <NavLink to="/buysell">Buy/Sell</NavLink>

      <NavLink to="/wallets">Wallets</NavLink>

      <NavLink to="/bundles">Bundles</NavLink>

      <NavLink to="/reporting">Reporting</NavLink>

      <NavLink to="/community">Community</NavLink>
    </nav>
  );
};
