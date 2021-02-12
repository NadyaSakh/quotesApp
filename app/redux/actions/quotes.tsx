import {
  GET_QUOTES,
  GET_QUOTES_FAILED,
  GET_QUOTES_SUCCESS
} from "../actionTypes/quotes";
import { QuotesListItem } from "../../quotes/types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../types";
import { Action, AnyAction, Dispatch } from "redux";
import getQuotes from "../../quotes/services/getQuotes";

interface IGetQuotesAction {
  type: typeof GET_QUOTES;
}

interface IGetQuotesSuccessAction {
  type: typeof GET_QUOTES_SUCCESS;
  quotesList: QuotesListItem[];
}

interface IGetQuotesFailedAction {
  type: typeof GET_QUOTES_FAILED;
  error: string;
}

export const getQuotesAction = (): IGetQuotesAction => ({
  type: GET_QUOTES
});

const getQuotesSuccessAction = (quotesList: QuotesListItem[]): IGetQuotesSuccessAction => ({
  type: GET_QUOTES_SUCCESS,
  quotesList
});

export const getQuotesFailedAction = (error: string): IGetQuotesFailedAction => ({
  type: GET_QUOTES_FAILED,
  error
});

export const fetchQuotesList = (): ThunkAction<void, RootState, unknown, Action> => (
  dispatch : Dispatch<AnyAction>
) => {
  dispatch(getQuotesAction());

  getQuotes()
    .then(quotesResult => {
      const { quotesList, error } = quotesResult;

      if(error && error.length !== 0){
        console.log("error =", error);
        dispatch(getQuotesFailedAction(error));
      }
      else {
        dispatch(getQuotesSuccessAction(quotesList));
      }
    })
    .catch(error => {
      console.log("error =", error);
      dispatch(getQuotesFailedAction(error));
    })
};

export type QuotesActionType =
  IGetQuotesAction |
  IGetQuotesSuccessAction |
  IGetQuotesFailedAction;