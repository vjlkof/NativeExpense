import { View, Text, StyleSheet } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function RecentExpenses ({ expenses, }) {
  const bottomBarHeight = useBottomTabBarHeight();
  return (
    <View style={[styles.pageContainer, { marginBottom: bottomBarHeight, },]}>
      <Text>
        All Expenses
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
});
