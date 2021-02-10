import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { QuotesStackParamsList } from "./types";
import { ReactElement } from "react";
import Quotes from "../quotes/containers/Quotes";
import { StyleSheet } from "react-native";
import { colors } from "../res/colors";

const QuotesStack = createStackNavigator<QuotesStackParamsList>();

const QuotesStackNavigator = (): ReactElement => {
  const quotesOptions = {
    headerShown: true,
    title: 'Котировки',
    headerTitleStyle: styles.headerTitleStyle,
    headerStyle: styles.headerStyle,
    headerRight: undefined,
    headerLeft: undefined
  };

  return (
    <QuotesStack.Navigator>
      <QuotesStack.Screen
        name="Quotes"
        component={Quotes}
        options={quotesOptions}
      />
    </QuotesStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '500',
    color: colors.dark,
    textAlign: 'center'
  },
  headerStyle: {
    backgroundColor: colors.white,
    elevation: 0,
    borderBottomWidth: 0,
    shadowOpacity: 0
  }
});

export default QuotesStackNavigator;