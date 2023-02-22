import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/constants';

export default function ExpenseItem ({ expense, }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.description}>
          {expense.description}
        </Text>
        <Text style={styles.date}>
          {expense.date.toString()}
        </Text>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.amount}>
          {expense.amount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 12,
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
    margin: 15,
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
    backgroundColor: GlobalStyles.colors.primary50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    // height: 50,
    padding: 10,
  },
  amount: {
    color: GlobalStyles.colors.primary800,
    fontWeight: 'bold',
  },
});
