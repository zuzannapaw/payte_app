import axios from "axios";
import { API_KEY } from "./variables";

const fetchCoins = async (ids: string[], vs_currencies: string[]) => {
  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/simple/price",
    params: {
      ids: ids.join(),
      vs_currencies: vs_currencies.join(),
      include_24hr_change: true,
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

export default fetchCoins;
