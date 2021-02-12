import React, { ReactElement } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation, TabActions } from '@react-navigation/native';
import { QuotesMenuIcon } from "../../res/icon";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";

const QuotesButton = (): ReactElement => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onSeeQuotesPress = (): void => {
    const jumpToAction = TabActions.jumpTo('Quotes');

    navigation.dispatch(jumpToAction);
  };

  return (
    <TouchableOpacity onPress={onSeeQuotesPress} style={styles.menuIcon}>
      <QuotesMenuIcon/>
    </TouchableOpacity>
  );
};

export default QuotesButton;

const styles = StyleSheet.create({
  menuIcon: {
    marginRight: 16
  }
});
