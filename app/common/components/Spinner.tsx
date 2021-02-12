import React, { ReactElement } from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import { Spinner } from '@ui-kitten/components';
import { colors } from '../../res/colors';


const SpinnerView = (): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Spinner style={styles.spinner} />
    </SafeAreaView>
  );
};

export default SpinnerView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    borderColor: colors.dark
  }
});
