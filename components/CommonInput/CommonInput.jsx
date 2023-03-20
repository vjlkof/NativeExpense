import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/constants';

export default function CommonInput({ title = '', height = 0, inputConfig }) {
  const propsStyles = StyleSheet.create({
    height: !height ? 35 : height,
  });

  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={[styles.textInput, propsStyles]}
        {...inputConfig}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: GlobalStyles.colors.primary,
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: GlobalStyles.colors.primary,
    borderRadius: 5,
    fontSize: 16,
    padding: 5,
    elevation: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlignVertical: 'top',
  },
});
