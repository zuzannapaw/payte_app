import { NavLink } from "react-router-dom";
import { TableItemElement } from "../components/table/tableItemElement";

export const SideNav = () => {
  return (
    <nav className="nav">
      <div className="logo"> Payte </div>

      <NavLink to="/overview">Overview</NavLink>

      <NavLink to="/buysell">Buy/Sell</NavLink>

      <NavLink to="/wallets">Wallets</NavLink>

      <NavLink to="/bundles">Bundles</NavLink>

      <NavLink to="/reporting">Reporting</NavLink>

      <NavLink to="/community">Community</NavLink>
      <div className="favorites">
        <p>Favorites</p>
        <p>...</p>
      </div>
      <TableItemElement label="BTC" content="Bitcoin" />
      <TableItemElement label="XRP" content="Ripple" />
      <div className="user">
        <div>img</div>
        <div className="user-data">
          <p className="name">Name Surname</p>
          <p className="email">name@surname.com</p>
        </div>
        <p>...</p>
      </div>
    </nav>
  );
};
