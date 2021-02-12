import React, { ReactElement } from 'react';
import { Dimensions, FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { QuotesListItem } from "./QuotesListItem";
import { colors } from "../../res/colors";


const { width } = Dimensions.get('window');

type OwnProps = {
  refreshing: boolean;
  quotesIdsList: number[]
}

const renderItem = ({ item }: ListRenderItemInfo<number>): ReactElement => {
  return (
    <QuotesListItem quoteId={item} />
  );
};

const keyExtractor = (item: number, index: number): string => `${item}${index}`;

const separator = () => <View style={styles.separator}/>;

export const QuotesListView = ({
  refreshing,
  quotesIdsList
}: OwnProps): ReactElement => {
  return (
    <FlatList
      data={quotesIdsList}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.container}
      refreshing={refreshing}
      onEndReachedThreshold={0.1}
      ItemSeparatorComponent={separator}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: width
  },
  separator: {
    width: width - 32,
    alignSelf:'center',
    height: 0.5,
    backgroundColor: colors.darkGray
  }
});
