import { useQuery } from "react-query";

import api from "../../api";
import queryKey from "./keys";
import { type AxiosError } from "axios";
import { type Data } from "./types";

const BASE_URL = "/coins/bitcoin/market_chart?vs_currency=usd";

interface IOptions {
  days: number;
}

const read = (options: IOptions) => {
  const { days } = options;
  const url = `${BASE_URL}&days=${days}`;

  const response = useQuery(
    [queryKey.read, days],
    async () => await api.get({ url }),
    {
      enabled: !!days,
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: () => {},
      onError: (_err: AxiosError) => {},
    }
  );

  return {
    ...response,
    data: ({ ...response.data, timestamp: Date.now() } || null) as Data,
  };
};

const queries = { read };

export default queries;
