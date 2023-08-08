import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function DismissKeyboard({ children }) {
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            {children}
        </TouchableWithoutFeedback>
    )
}