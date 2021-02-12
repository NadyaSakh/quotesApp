import { QuotesListItem } from "../types";

export const initialTimerId: NodeJS.Timeout = new class implements NodeJS.Timeout {
  [Symbol.toPrimitive](): number {
    return 0;
  }

  hasRef(): boolean {
    return false;
  }

  ref(): this {
    return this;
  }

  refresh(): this {
    return this;
  }

  unref(): this {
    return this;
  }
};

export const mockedQuotes: QuotesListItem[] =
    [
      {
        name: "BTC_BTS",
        id: 14,
        last: "0.00000114",
        lowestAsk: "0.00000114",
        highestBid: "0.00000113",
        percentChange: "0.06542056",
        baseVolume: "0.42046250",
        quoteVolume: "377403.69245232",
        isFrozen: "0",
        high24hr: "0.00000119",
        low24hr: "0.00000106"
      },
       {
         name: "BTC_DASH",
         id: 14,
         last: "0.00000114",
         lowestAsk: "0.00000114",
         highestBid: "0.00000113",
         percentChange: "0.06542056",
         baseVolume: "0.42046250",
         quoteVolume: "377403.69245232",
         isFrozen: "0",
         high24hr: "0.00000119",
         low24hr: "0.00000106"
      }
];