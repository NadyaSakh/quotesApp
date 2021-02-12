import React, { ReactElement } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation, TabActions } from '@react-navigation/native';
import { AboutMenuIcon } from "../../res/icon";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";

const AboutButton = (): ReactElement => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onMoveToAboutPress = (): void => {
    const jumpToAction = TabActions.jumpTo('About');
    navigation.dispatch(jumpToAction);
  };

  return (
    <TouchableOpacity onPress={onMoveToAboutPress} style={styles.menuIcon}>
      <AboutMenuIcon/>
    </TouchableOpacity>
  );
};

export default AboutButton;

const styles = StyleSheet.create({
  menuIcon: {
    marginRight: 16
  }
});
