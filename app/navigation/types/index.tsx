export type AboutStackParamsList = {
  About: undefined;
}

export type QuotesStackParamsList = {
  Quotes: undefined;
}

export type  RootStackParamList = AboutStackParamsList &
  QuotesStackParamsList & {
    LaunchScreen: undefined;
    Tabs: undefined;
};