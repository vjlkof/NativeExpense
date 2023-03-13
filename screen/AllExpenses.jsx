import { View, StyleSheet } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ExpenseList from '../components/ExpensesList/ExpenseList';
import ExpenseTotal from '../components/ExpenseTotal/ExpenseTotal';

export default function AllExpenses({ expenses }) {
  const bottomBarHeight = useBottomTabBarHeight();
  return (
    <View style={[styles.pageContainer, { marginBottom: bottomBarHeight }]}>
      <ExpenseTotal expenses={expenses}>Total</ExpenseTotal>
      <ExpenseList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
});
