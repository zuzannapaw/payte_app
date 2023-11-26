import { TableItemElement } from "../../components/table/tableItemElement";
import { ThreeDotsDropdown } from "../../components/threeDotsdropdown";

export const FavoritesNav = () => {
  return (
    <>
      <div className="favorites">
        <p>Favorites</p>
        <ThreeDotsDropdown />
      </div>
      <TableItemElement label="BTC" content="Bitcoin" />
      <TableItemElement label="XRP" content="Ripple" />
    </>
  );
};
