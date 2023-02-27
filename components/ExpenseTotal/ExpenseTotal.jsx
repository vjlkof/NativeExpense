import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/constants';

export default function ExpenseTotal ({ expenses, children, }) {
  return (
    <View style={styles.totalContainer}>
      <Text style={styles.totalDescription}>
        {children}
      </Text>
      <Text style={styles.total}>
        ${Number(expenses.reduce((acum, expense) => acum + Number(expense.amount), 0)).toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 5,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
  },

  totalDescription: {
    color: GlobalStyles.colors.gray500,
    textAlignVertical: 'center',
  },

  total: {
    color: GlobalStyles.colors.gray700,
    fontWeight: 'bold',
    fontSize: 20,
    textAlignVertical: 'center',
  },
});
