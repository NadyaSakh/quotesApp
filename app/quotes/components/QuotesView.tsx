import React, { ReactElement } from 'react';
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { colors } from "../../res/colors";

const { width } = Dimensions.get('window');
// 1.	Элемент навигации, позволяющий перейти на экран О приложении
// 2.	Таблицу, содержащую котировки с биржи poloniex, обновляемые в фоне по таймеру.
// В ячейке показывать имя тикера, last, highestBid и percentChange.
const QuotesView = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Котировки</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'transparent',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 24,
    color: colors.black,
    letterSpacing: 0.2,
    textAlign: 'center'
  },
});

export default QuotesView;