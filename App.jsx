import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from './screen/RecentExpenses';
import AllExpenses from './screen/AllExpenses';
import UpdateExpenseDetail from './screen/UpdateExpenseDetail';
import AddExpenseDetail from './screen/AddExpenseDetail';
import PressableIconButton from './components/PressableIconButton/PressableIconButton';
import { GlobalStyles } from './constants/constants';
import expenses from './expenses';
import { StatusBar, View, StyleSheet } from 'react-native';

function TabScreen() {
  const Tab = createBottomTabNavigator();
  const [expenseList, setExpenseList] = useState(expenses);
  const periodTreshold = new Date();
  periodTreshold.setDate(periodTreshold.getDate() - 7);
  const filteredExpenseList = expenseList.filter(
    (expense) => expense.date > periodTreshold
  );
  const navigation = useNavigation();

  function onPressHeaderButton() {
    navigation.navigate('AddExpenseDetail');
  }

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: GlobalStyles.colors.primary800 }}
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <Tab.Screen
        name='RecentExpenses'
        options={{
          title: 'Recent Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' color={color} size={size} />
          ),
          headerRight: () => (
            <View style={styles.rightHeaderContainer}>
              <PressableIconButton
                iconName='add'
                size={30}
                color='white'
                onPress={onPressHeaderButton}
              />
            </View>
          ),
        }}
      >
        {(props) => (
          <RecentExpenses {...props} expenses={filteredExpenseList} />
        )}
      </Tab.Screen>
      <Tab.Screen
        name='AllExpenses'
        options={{
          title: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' color={color} size={size} />
          ),
          headerRight: () => (
            <View style={styles.rightHeaderContainer}>
              <PressableIconButton
                iconName='add'
                size={30}
                color='white'
                onPress={onPressHeaderButton}
              />
            </View>
          ),
        }}
      >
        {(props) => <AllExpenses {...props} expenses={expenseList} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle='light' />
      <Stack.Navigator
        sceneContainerStyle={{
          backgroundColor: GlobalStyles.colors.primary800,
        }}
        screenOptions={{
          contentStyle: {
            backgroundColor: GlobalStyles.colors.primary800,
          },
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
        }}
      >
        <Stack.Screen
          name='TabScreen'
          options={{
            headerShown: false,
          }}
        >
          {(props) => <TabScreen />}
        </Stack.Screen>
        <Stack.Screen
          name='AddExpenseDetail'
          component={AddExpenseDetail}
          options={{
            title: 'Add Expense',
          }}
        />
        <Stack.Screen
          name='UpdateExpenseDetail'
          component={UpdateExpenseDetail}
          options={{
            title: 'Update Expense',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rightHeaderContainer: {
    paddingRight: 10,
  },
});
