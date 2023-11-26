import React from "react";

type Notification = boolean;

export const NotificationContext = React.createContext<
  Notification | undefined
>(undefined);
