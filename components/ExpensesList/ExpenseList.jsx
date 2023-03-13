import { View, StyleSheet, FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem/ExpenseItem';

export default function ExpenseList({ expenses }) {
  return (
    <View style={styles.itemListContainer}>
      <FlatList
        data={expenses}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemListContainer: {},
});
