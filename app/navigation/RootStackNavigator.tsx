import React, { ReactElement } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import LaunchScreen from "../launchScreen/containers/LaunchScreen";
import TabNavigator from "./TabsNavigator";

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = (): ReactElement => {
  const tabBarOptions = {
    headerTitle: '',
    headerShown: false
  };

  return (
    <RootStack.Navigator initialRouteName="LaunchScreen">
      <RootStack.Screen
        name="LaunchScreen"
        component={LaunchScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        key="tabs"
        name="Tabs"
        component={TabNavigator}
        options={tabBarOptions}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;