import React, { ReactElement } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import LaunchScreen from "../launchScreen/containers/LaunchScreen";

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = (): ReactElement => {

  return (
    <RootStack.Navigator initialRouteName="LaunchScreen">
      <RootStack.Screen
        name="LaunchScreen"
        component={LaunchScreen}
        options={{headerShown: false}}
      />

    </RootStack.Navigator>
  );
};

export default RootStackNavigator;