import 'react-native-gesture-handler';
import * as React from 'react';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';

import RootStackNavigator from "./app/navigation/RootStackNavigator";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainer>
        <ApplicationProvider {...eva} theme={eva.light}>
          <RootStackNavigator />
        </ApplicationProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
