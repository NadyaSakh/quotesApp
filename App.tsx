import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStackNavigator from "./app/navigation/RootStackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator/>
    </NavigationContainer>
  );
};

export default App;
