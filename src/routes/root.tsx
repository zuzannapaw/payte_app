import { Outlet } from "react-router-dom";
import { SideNav } from "../layout/sideNav";
import { SearchBar } from "../layout/SearchBar";
import { Hamburger } from "../components/hamburger";
import { Notifications } from "../components/notifications";
import { useState, useEffect } from "react";
import { NotificationContext } from "../store/notificationContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../store/userContext";
import userAvatar from "../assets/img/businessman.png";
import { User } from "../store/userContext";

const notify = () => {
  toast.info("Info Notification !", {
    position: toast.POSITION.BOTTOM_CENTER,
    toastId: "1",
  });
};

const user: User = {
  favorites: {},
  name: "Marc",
  surname: "Webber",
  email: "marc@riot.com",
  avatar: userAvatar,
  balance: 243,
};

export const Root = () => {
  const [notification, setNotification] = useState(false);

  const notificationHandler = () => {
    setNotification(true);
    notify();
  };

  useEffect(() => {
    setTimeout(notificationHandler, 5000);
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
        <ToastContainer />
      </div>
    </NotificationContext.Provider>
  );
};
