import { ThreeDotsDropdown } from "../../components/threeDotsDropdown";
import { SideNavItem } from "./sideNavItem";
import { FavoritesNav } from "./favoritesNav";
import { UserContext } from "../../store/userContext";
import { useContext, FC, useState } from "react";
import { HomeIcon } from "../../components/icon/iconStore/HomeIcon";
import { BankIcon } from "../../components/icon/iconStore/BankIcon";
import { WalletIcon } from "../../components/icon/iconStore/WalletIcon";
import { CheckIcon } from "../../components/icon/iconStore/CheckIcon";
import { FlagIcon } from "../../components/icon/iconStore/FlagIcon";
import { AtomIcon } from "../../components/icon/iconStore/AtomIcon";
import logo from "../../assets/img/logo.svg";
import { SideNavItemProps } from "./sideNavItem/types";
import { MenuIcon } from "../../components/icon/iconStore/MenuIcon";

const sideNavData: SideNavItemProps[] = [
  { label: "Overview", path: "/overview", icon: <HomeIcon color="#9896A1" /> },
  { label: "Buy/Sell", path: "/buysell", icon: <BankIcon color="#9896A1" /> },
  { label: "Wallets", path: "/wallets", icon: <WalletIcon color="#9896A1" /> },
  { label: "Bundles", path: "/bundles", icon: <CheckIcon color="#9896A1" /> },
  {
    label: "Reporting",
    path: "/reporting",
    icon: <FlagIcon color="#9896A1" />,
  },
  { label: "Community", path: "community", icon: <AtomIcon color="#9896A1" /> },
];

/**
 * @name SideNav
 * @description A SideNav component
 * @returns {JSX.Element} The JSX element
 * @example
 * <SideNav/>
 */

export const SideNav: FC = (): JSX.Element => {
  const user = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const openMenuHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      <button onClick={openMenuHandler} className="nav-mobile">
        <MenuIcon color="#7445fb" />
      </button>
      <nav className={`nav ${open ? "nav-open" : ""}`}>
        <div className="logo">
          <img src={logo}></img>
          <p>Payte</p>
        </div>
        <div className="sidenav">
          {sideNavData.map((data) => (
            <SideNavItem
              label={data.label}
              path={data.path}
              icon={data.icon}
              key={data.label}
            />
          ))}
        </div>
        <div className="favorites-and-user">
          <FavoritesNav />
          <div className="user">
            <div className="user-avatar">
              <img src={user?.avatar}></img>
            </div>
            <div className="user-data">
              <p className="name">
                {user?.name} {user?.surname}
              </p>
              <p className="email">{user?.email}</p>
            </div>
            <ThreeDotsDropdown
              options={[{ name: "Settings" }, { name: "Profile" }]}
              dropdownPosition="top"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
