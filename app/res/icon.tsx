import React, { ReactElement } from "react";
import { Icon } from '@ui-kitten/components';
import { colors } from "./colors";
import { StyleSheet } from "react-native";

interface IconProps {
  focused: boolean;
}

const QuotesIcon = (focused: boolean): ReactElement => {
  const { dark, darkGray } = colors;
  const color = focused ? dark : darkGray;

  return (
    <Icon
      name="trending-up-outline"
      style={styles.icon}
      fill={color}
    />
  );
};

const InfoIcon = (focused: boolean): ReactElement => {
  const { dark, darkGray } = colors;
  const color = focused ? dark : darkGray;

  return <Icon
    style={styles.icon}
    fill={color}
    name='book-outline'
  />
};

export const quotesIcon = ({ focused }: IconProps): React.ReactElement => QuotesIcon(focused);

export const infoIcon = ({focused}: IconProps): ReactElement => InfoIcon(focused);


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});