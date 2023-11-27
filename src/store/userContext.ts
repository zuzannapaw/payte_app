import React from "react";

export type User = {
  favorites: any;
  name: string;
  surname: string;
  email: string;
  avatar: string;
  balance: number;
};

export const UserContext = React.createContext<undefined | User>(undefined);
