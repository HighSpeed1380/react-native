import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from '../Text/CustomText';
import Colors from '../../../colors';

type IProps = {
    isOutlined?: boolean;
    buttonText: string;
    style?: any;
    onPress?: () => void
}

// TODO: Refactor the button and change the background color of the button when its clicked if it's outlined

export default function Button({ buttonText, isOutlined, style, onPress, buttonTextStyle }) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.6} style={[styles.baseButton, style, isOutlined ? styles.outlinButton : null]}>
            <CustomText style={[styles.buttonText, buttonTextStyle, isOutlined ? styles.buttonTextBlack : null ]}>{ buttonText }</CustomText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    baseButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 19,
        width: '60%',
        borderRadius: 10,
        
        backgroundColor: Colors.primary,
    },
    outlinButton: {
        backgroundColor: 'white',
        borderWidth: .6,
        borderColor: Colors.primary,
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    },
    buttonTextWhite: {

    },
    buttonTextBlack: {
        color: 'black'
    },

})