import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "./types";
import React from "react";
import { colors } from "../res/colors";
import { TabBarLabels } from "../common/constants";
import {
  infoIcon,
  quotesIcon
} from "../res/icon";
import QuotesStackNavigator from "./QuotesStackNavigator";
import AboutStackNavigator from "./AboutStackNavigator";

const {ABOUT, QUOTES} = TabBarLabels;

const BottomTab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = (): React.ReactElement => {
  const tabBarOptions = {
    activeTintColor: colors.dark,
    inactiveTintColor: colors.darkGray,
    tabStyle: {
      height: 56
    },
    labelStyle: {
      bottom: 10,
      fontSize: 14
    }
  };

  const aboutOptions = {
    tabBarLabel: ABOUT,
    tabBarIcon: infoIcon
  };

  const quotesOptions = {
    tabBarLabel: QUOTES,
    tabBarIcon: quotesIcon
  };

  return (
    <BottomTab.Navigator
      initialRouteName="Tabs"
      tabBarOptions={tabBarOptions}
      >
      <BottomTab.Screen
        name="About"
        component={AboutStackNavigator}
        options={aboutOptions}
      />
      <BottomTab.Screen
        name="Quotes"
        component={QuotesStackNavigator}
        options={quotesOptions}
      />
    </BottomTab.Navigator>
  )
};

export default TabNavigator;