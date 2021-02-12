import 'react-native-gesture-handler';
import * as React from 'react';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';

import RootStackNavigator from "./app/navigation/RootStackNavigator";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import configureStore from "./app/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

const App = () => {
  return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <NavigationContainer>
            <SafeAreaProvider>
              <IconRegistry icons={EvaIconsPack} />
              <ApplicationProvider {...eva} theme={eva.light}>
                <RootStackNavigator />
              </ApplicationProvider>
            </SafeAreaProvider>
          </NavigationContainer>
        </Provider>
      </PersistGate>
  );
};

export default App;
