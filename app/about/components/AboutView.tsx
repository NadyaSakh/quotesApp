import React, { ReactElement } from 'react';
import { TabActions } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { colors } from "../../res/colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import { INFO_TEXT } from "../../common/constants";

const { width } = Dimensions.get('window');

const AboutView = (): ReactElement => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onSeeQuotesPress = (): void => {
    const jumpToAction = TabActions.jumpTo('Quotes');

    navigation.dispatch(jumpToAction);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        <Text style={styles.text}>{INFO_TEXT}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onSeeQuotesPress}
      >
        <Text style={styles.buttonText}>Просмотреть котировки</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'transparent',
    fontWeight: '800',
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
    backgroundColor: colors.blue,
    borderRadius: 24,
    width: width - 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  titleText: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 34,
    color: colors.darkBlue,
    letterSpacing: 0.7,
    textAlign: 'center'
  }
});

export default AboutView;