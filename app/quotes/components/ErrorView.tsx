import React, { ReactElement } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { colors } from "../../res/colors";
import { Icon } from "@ui-kitten/components";
import { selectErrorText } from "../helpers/selectErrorText";

type ErrorViewProps = {
  error: string;
}

const { width } = Dimensions.get('window');

export const ErrorView = ({ error }: ErrorViewProps): ReactElement => {
  if (error !== undefined && error.length !== 0) {
    const errorText = selectErrorText(error.toString());

    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon
            style={styles.errorIcon}
            fill={colors.red}
            name='alert-circle-outline'
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Ошибка!</Text>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  container: {
    width: width - 32,
    backgroundColor: colors.lightYellow,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 16,
    paddingVertical: 20,
    marginBottom: 5
  },
  iconContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    flex: 4,
    backgroundColor: 'transparent',
    marginEnd: 8
  },
  title: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.black,
    letterSpacing: 0.2,
    textAlign: 'left'
  },
  errorText: {
    backgroundColor: 'transparent',
    fontWeight: '500',
    fontSize: 14,
    color: colors.darkGray,
    letterSpacing: 0.2,
    textAlign: 'left',
    flexWrap: 'wrap'
  },
  errorIcon: {
    width: 32,
    height: 32
  }
});