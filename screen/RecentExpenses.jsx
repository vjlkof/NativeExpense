import { View, StyleSheet } from 'react-native';
import ExpenseList from '../components/ExpensesList/ExpenseList';
import ExpenseTotal from '../components/ExpenseTotal/ExpenseTotal';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function RecentExpenses ({ expenses, }) {
  const bottomBarHeight = useBottomTabBarHeight();
  return (
    <View style={{ marginBottom: bottomBarHeight + 65, }}>
      <ExpenseTotal expenses={expenses} />
      <ExpenseList expenses={expenses}/>
    </View>
  );
}
