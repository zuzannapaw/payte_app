import { ThreeDotsDropdown } from "../../../components/threeDotsDropdown";
import bitcoin from "../../../assets/img/bitcoin.png";
import ethereum from "../../../assets/img/ethereum.png";
import { FC } from "react";
import { CoinInfo } from "../../../components/summary/coinInfo";

export const FavoritesNav: FC = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div className="favorites">
        <p>Favorites</p>
        <ThreeDotsDropdown options={[{ name: "List" }, { name: "Manage" }]} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <CoinInfo label="BTC" content="Bitcoin" image={bitcoin} variantSmall />
        <CoinInfo label="XRP" content="Ripple" image={ethereum} variantSmall />
      </div>
    </div>
  );
};
