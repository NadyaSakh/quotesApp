import { Quotes, QuotesListItem } from "../types";
import { getQuotesFetch } from "../../services/getQuotesFetch";

type Error = {
  error: string;
}

type ResultProps = {
  quotesList: QuotesListItem[];
  error: string;
}

const convertQuotes = (obj: object): QuotesListItem[] => {
  let result: QuotesListItem[] = [];

  Object.entries(obj).forEach(([key, value]) => {
    let item = {name: key, ...value};
    result.push(item);
  });

  return result;
};

const getQuotes = async (): Promise<ResultProps> => {
  try {
    const quotes =  await  getQuotesFetch<Quotes & Error>({
      urlBase: 'public?command=returnTicker'
    });

    if (!quotes.error){
      let quotesList = convertQuotes(quotes);

      return {
        quotesList: quotesList,
        error: ''
      }
    }

    return {
      quotesList: [],
      error: quotes.error
    };

  } catch (error) {
    return Promise.reject(error);
  }
};

export default getQuotes;
