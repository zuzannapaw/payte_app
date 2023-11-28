import { ThreeDotsDropdown } from "../../../components/threeDotsDropdown";
import bitcoin from "../../../assets/img/bitcoin.png";
import ethereum from "../../../assets/img/ethereum.png";
import { FC } from "react";
import { CoinInfo } from "../../../components/summary/coinInfo";

export const FavoritesNav: FC = (): JSX.Element => {
  return (
    <div className="favorites-wrapper">
      <div className="favorites">
        <p>Favorites</p>
        <ThreeDotsDropdown options={[{ name: "List" }, { name: "Manage" }]} dropdownPosition="bottom" />
      </div>
      <div className="favorites-items">
        <CoinInfo label="BTC" content="Bitcoin" image={bitcoin} variantSmall />
        <CoinInfo label="XRP" content="Ripple" image={ethereum} variantSmall />
      </div>
    </div>
  );
};
