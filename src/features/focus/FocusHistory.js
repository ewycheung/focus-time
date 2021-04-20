import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles(item.status).historyItem}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles().title}>Things we've focused on</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles().clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = (status) =>
  StyleSheet.create({
    historyItem: {
      color: status > 1 ? 'red' : 'green',
      fontSizes: fontSizes.md,
    },
    title: {
      color: 'white',
      fontSizes: fontSizes.lg,
    },
    clearContainer: {
      alignItems: 'center',
      padding: spacing.md,
    },
  });
