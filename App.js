import RecentExpenses from './screen/RecentExpenses';
import AllExpenses from './screen/AllExpenses';
import { GlobalStyles } from './constants/constants';
import expenses from './expenses';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

export default function App () {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
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
        }}>
          {props => <RecentExpenses {...props} expenses={expenses} />}
        </Tab.Screen>
        <Tab.Screen name="AllExpenses" options={{
          title: 'All Expenses',
          tabBarIcon: ({ color, size, }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}>
          {props => <AllExpenses {...props} expenses={expenses} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
