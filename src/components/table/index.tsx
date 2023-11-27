import { TableItem } from "./tableItem";
import fetchCoins from "../../utils/fetchCoins";
import { useEffect } from "react";
import bitcoin from "../../assets/img/bitcoin.png";
import ethereum from "../../assets/img/ethereum.png";
import cardano from "../../assets/img/cardano.png";

const tableData = [
  [
    { label: "BTC", content: "Bitcoin", image: bitcoin },
    { label: "Price", content: "$234.34" },
    { label: "Change", content: "+12.5%" },
  ],
  [
    { label: "ETH", content: "Ethereum", image: ethereum },
    { label: "Price", content: "$234.34" },
    { label: "Change", content: "+12.5%" },
  ],
  [
    { label: "ADA", content: "Cardano", image: cardano },
    { label: "Price", content: "$234.34" },
    { label: "Change", content: "+12.5%" },
  ],
];

export const Table = () => {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    const data = fetchCoins();
    // console.log(data);
  }, []);

  return (
    <div className="table">
      {tableData.map((data) => {
        return <TableItem itemData={data} />;
      })}
    </div>
  );
};
