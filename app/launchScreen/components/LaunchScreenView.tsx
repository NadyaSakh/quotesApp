import React, { ReactElement } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../res/colors";

const { width } = Dimensions.get('window');

const LaunchScreenView = (): ReactElement => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>Quotes App</Text>
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
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 24,
    color: colors.white,
    letterSpacing: 0.2,
    textAlign: 'center'
  },
});

export default LaunchScreenView;