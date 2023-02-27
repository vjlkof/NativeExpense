import { View, StyleSheet } from 'react-native';
import ExpenseList from '../components/ExpensesList/ExpenseList';
import ExpenseTotal from '../components/ExpenseTotal/ExpenseTotal';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function RecentExpenses ({ expenses, }) {
  const bottomBarHeight = useBottomTabBarHeight();
  return (
    <View style={[styles.pageContainer, { marginBottom: bottomBarHeight, },]}>
      <ExpenseTotal expenses={expenses}>
        Last 7 Days
      </ExpenseTotal>
      <ExpenseList expenses={expenses}/>
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
