import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

type IProps = {
    children?: string;
    style?: any;
    onPress?: React.Dispatch<any>
}

export default function CustomText({ children, style, onPress }: IProps) {
  return (
    <Text onPress={onPress} style={[styles.text, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MadaniRegular',
        fontSize: 12,
    }
})

