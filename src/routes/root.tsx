import { Outlet } from "react-router-dom";
import { SideNav } from "../layout/sideNav";
import { SearchBar } from "../layout/SearchBar";
import { Hamburger } from "../components/hamburger";
import { Notifications } from "../components/notifications";
import { useState, useEffect } from "react";
import { NotificationContext } from "../store/notificationContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast.info("Info Notification !", {
    position: toast.POSITION.BOTTOM_CENTER,
    toastId: "elo",
  });
  console.log("elo2");
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
        <ToastContainer />
      </div>
    </NotificationContext.Provider>
  );
};
