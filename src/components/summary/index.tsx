import { SummaryItem } from "./summaryItem";
import fetchCoins from "../../utils/fetchCoins";
import { useEffect, useState } from "react";
import bitcoin from "../../assets/img/bitcoin.png";
import ethereum from "../../assets/img/ethereum.png";
import cardano from "../../assets/img/cardano.png";
import { FC } from "react";
import { CoinInfoProps } from "./coinInfo/types";

type CoinInfoDataType = CoinInfoProps

const coinInfoData: CoinInfoDataType[][] = [
  [
    { label: "BTC", content: "Bitcoin", image: bitcoin },
    { label: "Price", content: 0 },
    { label: "Change", content: 0 },
  ],
  [
    { label: "ETH", content: "Ethereum", image: ethereum },
    { label: "Price", content: 0 },
    { label: "Change", content: 0 },
  ],
  [
    { label: "ADA", content: "Cardano", image: cardano },
    { label: "Price", content: 0 },
    { label: "Change", content: 0 },
  ],
];

export const Summary: FC = (): JSX.Element => {
  const [coins, setCoins] = useState<CoinInfoDataType[][]>(coinInfoData);
  const getCoinsData = async () => {
    const names = coinInfoData.map((el) =>
      (el[0].content as string).toLowerCase()
    );
    const data = await fetchCoins(names, ["usd"]);
    coinInfoData.map((coinInfo: CoinInfoDataType[]) => {
      const gecoData = data[(coinInfo[0].content as string).toLowerCase()];
      coinInfo[1].content = gecoData.usd;
      coinInfo[2].content = gecoData.usd_24h_change.toFixed(2);

      return coinInfo;
    });
    setCoins(coinInfoData);
  };

  useEffect(() => {
    getCoinsData();
  }, []);

  return (
    <div className="table">
      {coins.map((data: CoinInfoDataType[]) => {
        return <SummaryItem itemData={data} />;
      })}
    </div>
  );
};
