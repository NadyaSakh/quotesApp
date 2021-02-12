import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { AboutStackParamsList } from "./types";
import { ReactElement } from "react";
import { StyleSheet } from "react-native";
import { colors } from "../res/colors";
import About from "../about/containers/About";
import QuotesButton from "../common/components/QuotesButton";

const AboutStack = createStackNavigator<AboutStackParamsList>();

const AboutStackNavigator = (): ReactElement => {
  const aboutOptions = {
    headerShown: true,
    title: 'О приложении',
    headerTitleStyle: styles.headerTitleStyle,
    headerStyle: styles.headerStyle,
    headerRight: QuotesButton,
    headerLeft: undefined,
    headerTitleAlign: 'center' as const
  };

  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="About"
        component={About}
        options={aboutOptions}
      />
    </AboutStack.Navigator>
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

export default AboutStackNavigator;