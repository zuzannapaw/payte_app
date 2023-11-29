import { useContext } from "react";
import { NotificationContext } from "../../store/notificationContext";
import { BellIcon } from "../../components/icon/iconStore/BellIcon";
import { FC } from "react";

/**
 * @name Notifications
 * @description A Notifications component
 * @returns {JSX.Element} The JSX element
 * @example
 * <Notifications/>
 */

export const Notifications: FC = (): JSX.Element => {
  const notification = useContext(NotificationContext);
  return (
    <div className="notifications">
      <BellIcon color="#9896A1" />
      {notification && <div className="notification-dot"></div>}
    </div>
  );
};
