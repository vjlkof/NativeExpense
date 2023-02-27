import { View, Text } from 'react-native';

export default function ExpenseDetail ({ route, }) {
  const expense = route.params.expense;

  return (
    <View>
      <Text>
        Expense Detail - {expense.description}
      </Text>
    </View>
  );
}
