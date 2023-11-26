import { API_KEY } from "./variables";

const fetchCoins = async () => {
  const url =
    "https://coingecko.p.rapidapi.com/simple/price?ids=%3CREQUIRED%3E&vs_currencies=%3CREQUIRED%3E";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export default fetchCoins;
