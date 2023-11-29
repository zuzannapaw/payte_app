import React from "react";

type FavoritesType = {
  label: string;
  content: string;
  image: string;
  variantSmall: boolean;
}[];

export type User = {
  favorites: FavoritesType;
  name: string;
  surname: string;
  email: string;
  avatar: string;
  balance: string;
};

export const UserContext = React.createContext<undefined | User>(undefined);
