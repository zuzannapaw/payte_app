import { ThreeDotsDropdown } from "../../../components/threeDotsDropdown";
import { FC } from "react";
import { CoinInfo } from "../../../components/summary/coinInfo";
import { useContext } from "react";
import { UserContext } from "../../../store/userContext";
import { User } from "../../../store/userContext";

/**
 * @name FavoritesNav
 * @description A FavoritesNav component
 * @returns {JSX.Element} The JSX element
 * @example
 * <FavoritesNav/>
 */

export const FavoritesNav: FC = (): JSX.Element => {
  const user: User | undefined = useContext(UserContext);

  return (
    <div className="favorites-wrapper">
      <div className="favorites">
        <p>Favorites</p>
        <ThreeDotsDropdown
          options={[{ name: "List" }, { name: "Manage" }]}
          dropdownPosition="bottom"
        />
      </div>
      <div className="favorites-items">
        {user?.favorites.map((fav) => {
          return (
            <CoinInfo
              label={fav.label}
              content={fav.content}
              image={fav.image}
              variantSmall={fav.variantSmall}
              key={fav.image}
            />
          );
        })}
      </div>
    </div>
  );
};
