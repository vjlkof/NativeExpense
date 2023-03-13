import { Pressable, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/constants';

export default function CommonButton({
  title,
  titleColor,
  width,
  height,
  backgroundColor,
  onPress,
}) {
  const propsContainerStyles = StyleSheet.create({
    width,
    height,
    backgroundColor,
  });

  const propsTextStyles = StyleSheet.create({
    color: titleColor,
  })
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.commonButtonContainer, propsContainerStyles]}>
        <Text style={[styles.button, propsTextStyles]}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  commonButtonContainer: {
    justifyContent:"center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    ripple: ('#06bcee', false),

  },
  button: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
