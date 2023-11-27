import { useContext } from "react";
import { NotificationContext } from "../../store/notificationContext";
import { BellIcon } from "../icon/iconStore/BellIcon";

export const Notifications = () => {
  const notification = useContext(NotificationContext);
  return (
    <div className="notifications">
      <BellIcon color="#9896A1" />
      {notification && <div className="notification-dot"></div>}
    </div>
  );
};
