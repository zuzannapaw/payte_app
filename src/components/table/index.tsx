import { TableItem } from "./tableItem";

import fetchCoins from "../../utils/fetchCoins";
import { useEffect } from "react";

const tableData = [
  [
    { label: "BTC", content: "Bitcoin" },
    { label: "Price", content: "$234.34" },
    { label: "Change", content: "+12.5%" },
  ],
  [
    { label: "ETH", content: "Ethereum" },
    { label: "Price", content: "$234.34" },
    { label: "Change", content: "+12.5%" },
  ],
  [
    { label: "ADA", content: "Cardano" },
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
