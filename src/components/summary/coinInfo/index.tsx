import { ArrowDownIcon } from "../../icon/iconStore/ArrowDownIcon";
import { ArrowUpIcon } from "../../icon/iconStore/ArrowUpIcon";
import { CoinInfoProps } from "./types";
import { FC } from "react";

export const CoinInfo: FC<CoinInfoProps> = (
  props: CoinInfoProps
): JSX.Element => {
  let content: string | number;

  if (props.label === "Price") {
    content = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
    }).format(props.content as number);
  } else if (props.label === "Change") {
    content = `${(props.content as number) > 0 ? "+" : ""}${props.content}%`;
  } else {
    content = props.content;
  }

  let displayedIcon: React.ReactNode;

  if (props.label === "Change") {
    if ((props.content as number) > 0) {
      displayedIcon = <ArrowUpIcon />;
    } else if ((props.content as number) < 0) {
      displayedIcon = <ArrowDownIcon />;
    } else {
      undefined;
    }
  }

  const changeColorClass: string =
    (props.content as number) > 0 ? "positive-change" : "negative-change";

  return (
    <div className="coin-info-wrapper">
      {props.image && (
        <div className={`image-wrapper ${props.variantSmall && "small"}`}>
          <img src={props.image}></img>
        </div>
      )}
      <div
        className={`table-item-element ${props.variantSmall ? "small" : ""}`}
      >
        <p className="label">{props.label}</p>
        <p
          className={`content ${
            props.label === "Change" ? changeColorClass : ""
          }`}
        >
          {content}
          {displayedIcon}
        </p>
      </div>
    </div>
  );
};
