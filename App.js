import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from './screen/RecentExpenses';
import AllExpenses from './screen/AllExpenses';
import ExpenseDetail from './screen/ExpenseDetail';
import PressableButton from './components/PressableButton/PressableButton';
import { GlobalStyles } from './constants/constants';
import expenses from './expenses';
import { StatusBar } from 'react-native';

function TabScreen () {
  const Tab = createBottomTabNavigator();
  const [expenseList, setExpenseList,] = useState(expenses);
  const periodTreshold = new Date();
  periodTreshold.setDate(periodTreshold.getDate() - 7);
  const filteredExpenseList = expenseList.filter((expense) => expense.date > periodTreshold);
  const navigation = useNavigation();

  function onPressHeaderButton () {
    navigation.navigate('ExpenseDetail');
  }

  return (
    <Tab.Navigator sceneContainerStyle= {{ backgroundColor: GlobalStyles.colors.primary800, }}
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
      }}>
      <Tab.Screen name="RecentExpenses" options={{
        title: 'Recent Expenses',
        tabBarIcon: ({ color, size, }) => (
          <Ionicons name="hourglass" color={color} size={size} />
        ),
        headerRight: () => (
          <PressableButton iconName='add' size={30} color='white' onPress={onPressHeaderButton}/>
        ),
      }}>
        {props => <RecentExpenses {...props} expenses={filteredExpenseList} />}
      </Tab.Screen>
      <Tab.Screen name="AllExpenses" options={{
        title: 'All Expenses',
        tabBarIcon: ({ color, size, }) => (
          <Ionicons name="calendar" color={color} size={size} />
        ),
        headerRight: () => (
          <PressableButton iconName='add' size={30} color='white' onPress={onPressHeaderButton}/>
        ),
      }}>
        {props => <AllExpenses {...props} expenses={expenseList} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App () {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle="light" />
      <Stack.Navigator sceneContainerStyle= {{ backgroundColor: GlobalStyles.colors.primary800, }}>
        <Stack.Screen name="TabScreen"
          options={{
            headerShown: false,
          }}
        >
          {props => <TabScreen />}
        </Stack.Screen>
        <Stack.Screen name="ExpenseDetail" component={ExpenseDetail} options={{
          title: 'Expense Details',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
