import React, { ReactElement } from 'react';
import { Dimensions, View, Text, StyleSheet } from "react-native";
import { colors } from "../../res/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";

const { width } = Dimensions.get('window');

interface OwnProps {
  quoteId: number;
}

export const QuotesListItem = ({
  quoteId
}: OwnProps): ReactElement => {

  const quotesItem = useSelector(({quotes: {quotesList}}: RootState) =>
  quotesList.find(innerItem => innerItem.id === quoteId)
  );
  if(!quotesItem){
    return <></>;
  }

  const {name, last, highestBid, percentChange} = quotesItem;

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.categoryText}>last: <Text style={styles.text}>{last}</Text></Text>
        <Text style={styles.categoryText}>highestBid: <Text style={styles.text}>{highestBid}</Text></Text>
        <Text style={styles.categoryText}>percentChange: <Text style={styles.text}>{percentChange}</Text></Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 16
  },
  infoContainer: {
    flex: 2.5,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingStart: 8,
    paddingVertical: 16
  },
  nameContainer: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.blue
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: colors.black,
    letterSpacing: 0.2,
    textAlign: 'left'
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: colors.darkBlue,
    letterSpacing: 0.2,
    textAlign: 'left'
  },
  nameText: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.black,
    letterSpacing: 0.2,
    textAlign: 'left'
  },
});
