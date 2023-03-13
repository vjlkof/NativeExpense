import { View, Text, Button, Input, StyleSheet } from 'react-native';

export default function UpdateExpenseDetail({ route }) {
  const expense = route.params.expense;

  return (
    <View style={styles.detailPageContainer}>
      <Text>Your Expense</Text>
      {/* <View>
        <Input>
        </Input>
        <Input>
        </Input>
      </View>
      <View>
        <Input>
        </Input>
      </View>
      <View>
        <Button>
        </Button>
        <Button>
        </Button>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  detailPageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
