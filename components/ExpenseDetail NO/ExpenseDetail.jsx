import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { GlobalStyles } from '../../constants/constants';
import CommonButton from '../CommonButton/CommonButton';
import CommonInput from '../CommonInput/CommonInput';
import getFormattedDate from '../../helpers/getFormattedDate';

export default function ExpenseDetail({ expense, update = false }) {
  return (
    <SafeAreaView style={styles.detailPageContainer}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.amountDateContainer}>
        <View style={styles.amountDateBlockContainer}>
          <CommonInput
            title={'Amount'}
            placeholder={'Amount'}
            type={'numeric'}
            value={update ? expense.amount : ''}
          />
        </View>
        <View style={styles.amountDateBlockContainer}>
          <CommonInput
            title={'Date'}
            placeholder={'YYYY-MM-DD'}
            value={update ? getFormattedDate(expense.date) : ''}
          />
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionBlockContainer}>
          <CommonInput
            title={'Description'}
            placeholder={'Description'}
            multiline={true}
            height={100}
            value={update ? expense.description : ''}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CommonButton
          title='Cancel'
          width={130}
          height={40}
          titleColor={GlobalStyles.colors.primary200}
          onPress={() => Alert.alert('left button pressed')}
        />
        <CommonButton
          title={update ? 'update' : 'Add'}
          width={130}
          height={40}
          titleColor={GlobalStyles.colors.primary}
          backgroundColor={GlobalStyles.colors.primary500}
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailPageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 80,
    marginHorizontal: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary,
    alignSelf: 'center',
  },

  amountDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  descriptionContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  amountDateBlockContainer: {
    width: '48%',
  },

  descriptionBlockContainer: {
    width: '100%',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
});
