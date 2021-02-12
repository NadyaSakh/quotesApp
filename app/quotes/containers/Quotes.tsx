import React, { ReactElement, useEffect, useState } from 'react';
import QuotesView from "../components/QuotesView";
import SpinnerView from "../../common/components/Spinner";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import { useDispatch } from "react-redux";
import { fetchQuotesList } from "../../redux/actions/quotes";
import { initialTimerId } from "../constants";

const Quotes = (): ReactElement => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState(false);

  const getQuotesList = (): void => {
    setRefreshing(true);
    dispatch(fetchQuotesList());
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout = initialTimerId;

      navigation.addListener('focus', () => {
      setLoading(true);

      timerId = setInterval(() => {
        getQuotesList();
      }, 5000);
    });

    const unsubscribe = navigation.addListener('blur', () => {
      clearInterval(timerId);
    });

    return unsubscribe;
  }, [navigation]);

  return loading ? (
    <SpinnerView />
  ) : (
      <QuotesView
        refreshing={refreshing}
      />
  );
};

export default Quotes;
