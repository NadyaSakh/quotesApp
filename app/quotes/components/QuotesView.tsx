import React, { ReactElement } from 'react';
import {
  Dimensions,
  StyleSheet,
  View
} from "react-native";
import { colors } from "../../res/colors";

import { QuotesListView } from "./QutesListView";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { ErrorView } from "./ErrorView";

const { width } = Dimensions.get('window');

type OwnProps = {
  refreshing: boolean;
}

type StateProps = {
  quotesIdxList: number[];
  error: string | undefined;
}


const QuotesView = ({
  refreshing,
}: OwnProps): ReactElement => {
  const { quotesIdxList, error }: StateProps = useSelector(
    ({ quotes }: RootState) => ({
      quotesIdxList: quotes.quotesIdxList,
      error: quotes.error
    })
  );

  return (
    <View style={styles.container}>
      <ErrorView error={error}/>
      <QuotesListView
        refreshing={refreshing}
        quotesIdsList={quotesIdxList}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default QuotesView;