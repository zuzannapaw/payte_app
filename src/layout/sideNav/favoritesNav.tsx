import { TableItemElement } from "../../components/table/tableItemElement";
import { ThreeDotsDropdown } from "../../components/threeDotsdropdown";
import bitcoin from "../../assets/img/bitcoin.png";
import ethereum from "../../assets/img/ethereum.png"

export const FavoritesNav = () => {
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
        <ThreeDotsDropdown />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap:"16px"
        }}
      >
        <TableItemElement
          label="BTC"
          content="Bitcoin"
          image={bitcoin}
          variantSmall
        />
        <TableItemElement label="XRP" content="Ripple" image={ethereum} variantSmall/>
      </div>
    </div>
  );
};
