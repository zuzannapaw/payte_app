import { TableItemElement } from "../../components/table/tableItemElement";
import { ThreeDotsDropdown } from "../../components/threeDotsdropdown";
import { SideNavItem } from "./sideNavItem";
import { FavoritesNav } from "./favoritesNav";

const sideNavData = [
  { label: "Overview", path: "/overview", icon: "faHouse" },
  { label: "Buy/Sell", path: "/buysell", icon: "faHouse" },
  { label: "Wallets", path: "/wallets", icon: "faHouse" },
  { label: "Bundles", path: "/bundles", icon: "faHouse" },
  { label: "Reporting", path: "/reporting", icon: "faHouse" },
  { label: "Community", path: "community", icon: "faHouse" },
];
export const SideNav = () => {
  return (
    <nav className="nav">
      <div className="logo"> Payte </div>
      <div className="sidenav">
        {sideNavData.map((data) => (
          <SideNavItem label={data.label} path={data.path} icon={data.icon} />
        ))}
      </div>
      <div className="favorites-and-user">
        <FavoritesNav />
        <div className="user">
          <div>img</div>
          <div className="user-data">
            <p className="name">Name Surname</p>
            <p className="email">name@surname.com</p>
          </div>
          <ThreeDotsDropdown />
        </div>
      </div>
    </nav>
  );
};
