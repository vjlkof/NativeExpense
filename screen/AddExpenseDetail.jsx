import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { GlobalStyles } from '../constants/constants';
import CommonButton from '../components/CommonButton/CommonButton';
import CommonInput from '../components/CommonInput/CommonInput';

export default function AddExpenseDetail({ route }) {
  // const expense = route.params.expense;
  const expense = route;
  console.log(expense);

  return (
    <SafeAreaView style={styles.detailPageContainer}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.amountDateContainer}>
        <View style={styles.amountDateBlockContainer}>
          <CommonInput
            title={'Amount'}
            placeholder={'Amount'}
            type={'numeric'}
          />
        </View>
        <View style={styles.amountDateBlockContainer}>
          <CommonInput title={'Date'} placeholder={'YYYY-MM-DD'} />
        </View>
      </View>
      <View style={styles.amountDateContainer}>
        <View style={styles.descriptionBlockContainer}>
          <CommonInput
            title={'Description'}
            placeholder={'Description'}
            multiline={true}
            height={100}
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
          title='Add'
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
