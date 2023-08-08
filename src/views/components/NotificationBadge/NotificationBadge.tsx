import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type IProps = {
    style?: any;
    onPress?: () => void
}

export default function NotificationBadge({ style, onPress }: IProps) {
  return (
    <View style={style}>
      <Ionicons name="notifications-outline" onPress={onPress} size={28} color="black" suppressHighlighting={true} />
    </View>
  );
}


