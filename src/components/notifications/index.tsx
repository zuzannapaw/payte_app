import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { NotificationContext } from "../../store/notificationContext";

export const Notifications = () => {
  const notification = useContext(NotificationContext);
  return (
    <div className="notifications">
      <FontAwesomeIcon icon={faBell} style={{ color: "#9896A1" }} />
      {notification && <div className="notification-dot"></div>}
    </div>
  );
};
