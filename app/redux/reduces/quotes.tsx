import { QuotesListItem } from "../../quotes/types";
import { QuotesActionType } from "../actions/quotes";
import { GET_QUOTES, GET_QUOTES_FAILED, GET_QUOTES_SUCCESS } from "../actionTypes/quotes";

export type QuotesState = {
  quotesList: QuotesListItem[];
  quotesIdxList: number[];
  error: string;
  refreshing: boolean;
}

const initialState: QuotesState = {
  quotesList: [],
  quotesIdxList: [],
  error: '',
  refreshing: false
};

export default (state = initialState, action: QuotesActionType): QuotesState => {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        refreshing: true,
      };
    case GET_QUOTES_SUCCESS:
      return {
        ...state,
        quotesList: action.quotesList,
        quotesIdxList: action.quotesList.map(innerItem => innerItem.id),
        error: '',
        refreshing: false
      };
    case GET_QUOTES_FAILED:
      return {
        ...state,
        error: action.error,
        refreshing: false
      };
    default:
      return state;
  }
};