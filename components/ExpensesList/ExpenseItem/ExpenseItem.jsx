import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/constants';
import getFormattedDate from '../../../helpers/getFormattedDate';

export default function ExpenseItem ({ expense, }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.description}>
          {expense.description}
        </Text>
        <Text style={styles.date}>
          {getFormattedDate(expense.date)}
        </Text>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.amount}>
          ${Number(expense.amount).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 15,
    backgroundColor: GlobalStyles.colors.primary500,
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
  leftContent: {
    flex: 2.5,
    marginRight: 5,
  },
  description: {
    color: GlobalStyles.colors.primary50,
    fontWeight: 'bold',
    fontSize: 18,
  },
  date: {
    color: GlobalStyles.colors.primary50,
    fontSize: 16,
    marginTop: 10,
  },
  rightContent: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  amount: {
    color: GlobalStyles.colors.primary800,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
