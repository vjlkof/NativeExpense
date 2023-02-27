import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PressableButton ({ iconName, size, color, onPress, }) {
  return (

    <Pressable onPress={onPress}>
      <Ionicons name={iconName} size={size} color={color} />
    </Pressable >
  );
}
