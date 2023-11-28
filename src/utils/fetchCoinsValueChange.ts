import axios from "axios";
import { API_KEY } from "./variables";
import { ChangeChartProps } from "../components/charts/changeChart/types";

const fetchCoinsValueChange = async (
  coin_name: string,
  days: string,
  interval?: string,
): Promise<ChangeChartProps | undefined> => {
  const options = {
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/${coin_name}/market_chart`,
    params: {
      vs_currency: "usd",
      days,
      interval
    },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    return response.data as ChangeChartProps;
  } catch (error) {
    console.error(error);
  }
};

export default fetchCoinsValueChange;
