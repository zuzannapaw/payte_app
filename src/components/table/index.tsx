import { TableItem } from "./tableItem";
import fetchCoins from "../../utils/fetchCoins";
import { useEffect, useState } from "react";
import bitcoin from "../../assets/img/bitcoin.png";
import ethereum from "../../assets/img/ethereum.png";
import cardano from "../../assets/img/cardano.png";

const tableData = [
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

export const Table = () => {
  const [coins, setCoins] = useState(tableData);
  const getCoinsData = async () => {
    const names = tableData.map((el) =>
      (el[0].content as string).toLowerCase()
    );
    const data = await fetchCoins(names, ["usd"]);
    tableData.map((cryptoCurr) => {
      const gecoData =
        data[(cryptoCurr[0].content as string).toLowerCase()];
      cryptoCurr[1].content = gecoData.usd;
      cryptoCurr[2].content = gecoData.usd_24h_change.toFixed(2);

      return cryptoCurr;
    });
    setCoins(tableData)
    console.log(tableData)
  };

  useEffect(() => {
    getCoinsData();
  }, []);

  return (
    <div className="table">
      {coins.map((data) => {
        return <TableItem itemData={data} />;
      })}
    </div>
  );
};
