import { View, StyleSheet } from 'react-native';
import ExpenseList from '../components/ExpensesList/ExpenseList';
import ExpenseTotal from '../components/ExpenseTotal/ExpenseTotal';

export default function RecentExpenses ({ expenses, }) {
  return (
    <View style={styles.recentExpensesContainer}>
      <ExpenseTotal expenses={expenses} />
      <ExpenseList expenses={expenses}/>
    </View>
  );
}

const styles = StyleSheet.create({
  recentExpensesContainer: {
    height: '90%',
  },
});
