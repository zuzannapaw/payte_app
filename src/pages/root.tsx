import { Outlet, useNavigate } from "react-router-dom";
import { SideNav } from "../layout/sideNav";
import { SearchBar } from "../layout/searchBar";
import { Hamburger } from "../layout/hamburger";
import { Notifications } from "../layout/notifications";
import { useState, useEffect, FC } from "react";
import { NotificationContext } from "../store/notificationContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../store/userContext";
import userAvatar from "../assets/img/businessman.png";
import { User } from "../store/userContext";
import bitcoin from "../assets/img/bitcoin.png";
import ethereum from "../assets/img/ethereum.png";

const notify = (): void => {
  toast.info("Info Notification !", {
    position: toast.POSITION.BOTTOM_CENTER,
    toastId: "1",
    progressStyle: { backgroundColor: "#7445fb" },
    icon: "🚀",
  });
};

const user: User = {
  favorites: [
    {
      label: "BTC",
      content: "Bitcoin",
      image: bitcoin,
      variantSmall: true,
    },
    {
      label: "ETH",
      content: "Ethereum",
      image: ethereum,
      variantSmall: true,
    },
  ],
  name: "Marc",
  surname: "Webber",
  email: "marc@riot.com",
  avatar: userAvatar,
  balance: new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  }).format(2143223),
};

/**
 * @name Root
 * @description A Root component
 * @returns {JSX.Element} The JSX element
 * @example
 * <Root/>
 */

export const Root: FC = (): JSX.Element => {
  const [notification, setNotification] = useState<boolean>(false);
  const navigate = useNavigate();

  const notificationHandler = (): void => {
    setNotification(true);
    notify();
  };

  useEffect(() => {
    setTimeout(notificationHandler, 30000);
    navigate("./overview/summary");
  }, []);

  return (
    <NotificationContext.Provider value={notification}>
      <div className="wrapper-layout">
        <UserContext.Provider value={user}>
          <SideNav />
          <div className="layout">
            <div className="top-menu">
              <SearchBar />
              <div className="right-boxes">
                <Notifications />
                <Hamburger />
              </div>
            </div>
            <div id="detail">
              <Outlet />
            </div>
          </div>
        </UserContext.Provider>
        <ToastContainer
          toastStyle={{ fontFamily: "SfProDisplay", color: "#0a041c" }}
        />
      </div>
    </NotificationContext.Provider>
  );
};
