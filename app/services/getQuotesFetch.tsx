import { fetchData } from "./index";
import { HTTPMethod } from "../common/constants";


type OwnProps = {
  urlBase: string;
};

export const getQuotesFetch = async <T,>({
  urlBase
}: OwnProps): Promise<T> => {
  const QUOTES_HOST_URL = 'https://poloniex.com/';
  const fullUrl = QUOTES_HOST_URL + urlBase;

  try {
    const responseJSON = (await fetchData({
      url: fullUrl,
      method: HTTPMethod.GET
    })) as T;

    return responseJSON;
  } catch (error) {
    return Promise.reject(error);
  }
};
