import axios from "axios";
import { API_KEY } from "./variables";

const fetchCoinsValueChange = async (coin_name: string) => {
  const options = {
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/${coin_name}/market_chart`,
    params: {
      vs_currency: "usd",
      days: "1",
    },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchCoinsValueChange;
