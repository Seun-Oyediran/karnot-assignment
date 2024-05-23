import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3";

interface Request {
  url: string;
  body?: any;
}

const get = async ({ url }: Request) => {
  return (await axios.get(baseUrl + url)).data;
};

const api = {
  get,
};

export default api;
