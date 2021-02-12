import React, { ReactElement } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { colors } from '../../res/colors';
import { INFO_TEXT } from '../../common/constants';

const { width } = Dimensions.get('window');

const AboutView = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>QUOTES APP</Text>
      <View style={styles.infoView}>
        <Text style={styles.text}>{INFO_TEXT}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'transparent',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: colors.black,
    letterSpacing: 0.2,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  buttonText: {
    backgroundColor: 'transparent',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 24,
    color: colors.white,
    letterSpacing: 0.2,
    textAlign: 'center'
  },
  button: {
    backgroundColor: colors.darkBlue,
    width: width - 32,
    borderRadius: 32,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoView: {
    borderRadius: 24,
    width: width - 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  titleText: {
    marginTop: 60,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 34,
    color: colors.darkBlue,
    letterSpacing: 3,
    textAlign: 'center'
  }
});

export default AboutView;
