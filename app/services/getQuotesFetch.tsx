import { fetchData } from "./index";
import { HTTPMethod } from "../common/constants";
import Config from "react-native-config";


type OwnProps = {
  urlBase: string;
};

export const getQuotesFetch = async <T,>({
  urlBase
}: OwnProps): Promise<T> => {
  const fullUrl = Config.QUOTES_HOST_URL + urlBase;

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
