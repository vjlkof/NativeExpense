import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { GlobalStyles } from '../constants/constants';
import CommonButton from '../components/CommonButton/CommonButton';
import CommonInput from '../components/CommonInput/CommonInput';

export default function AddExpenseDetail({ route }) {
  const addExpense = route.params.addExpense;
  const [inputValues, setInputValues] = useState({
    amout: '',
    date: '',
    description: '',
  });

  function onHandlerChange(inputIdentifier, value) {
    console.log('value', value);
    setInputValues((currentInputs) => ({
      ...currentInputs,
      [inputIdentifier]: value,
    }));
  }

  function addExpenseHandler() {
    console.log('enter add');
    addExpense({
      id: 9,
      ...inputValues,
    });
  }

  return (
    <SafeAreaView style={styles.detailPageContainer}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.amountDateContainer}>
        <View style={styles.amountDateBlockContainer}>
          <CommonInput
            title={'Amount'}
            inputConfig={{
              placeholder: 'Amount',
              type: 'numeric',
              onChangeText: (value) => onHandlerChange('amount', value),
              value: inputValues.amount,
            }}
          />
        </View>
        <View style={styles.amountDateBlockContainer}>
          <CommonInput
            title={'Date'}
            inputConfig={{
              placeholder: 'YYYY-MM-DD',
              type: 'numeric',
              onChangeText: (value) => onHandlerChange('date', value),
              value: inputValues.date,
              maxLength: 10,
            }}
          />
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionBlockContainer}>
          <CommonInput
            title={'Description'}
            height={100}
            inputConfig={{
              placeholder: 'Description',
              type: 'numeric',
              onChangeText: (value) => onHandlerChange('description', value),
              value: inputValues.description,
              multiline: true,
            }}
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
          title={'Add'}
          width={130}
          height={40}
          titleColor={GlobalStyles.colors.primary}
          backgroundColor={GlobalStyles.colors.primary500}
          onPress={() => addExpenseHandler()}
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
