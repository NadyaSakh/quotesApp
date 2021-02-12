import React, { ReactElement, useEffect } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import { useNavigation } from '@react-navigation/native';
import { colors } from "../../res/colors";

const { width } = Dimensions.get('window');

const LaunchScreenView = (): ReactElement => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    moveTo();
  }, []);

  const moveTo = (): void => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Tabs' }]
      });
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
          <Text style={styles.text}>QUOTES APP</Text>
      </SafeAreaView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.darkBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 34,
    color: colors.white,
    letterSpacing: 3,
    textAlign: 'center'
  },
});

export default LaunchScreenView;