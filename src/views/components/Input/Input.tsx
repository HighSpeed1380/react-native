import { StyleSheet, TextInput, View } from 'react-native';
import Label from '../Label/Label';
import CustomText from '../Text/CustomText';

// type IProps = {
//     disabled: boolean;
// }

export default function Input({ label, placeHolder, style, multiline, numberOfLines, keyboardType, disabled, value }) {
    return (
        <View style={styles.container}>
            <Label label={label} />
            <TextInput 
            multiline={multiline} 
            numberOfLines={numberOfLines} 
            placeholder={placeHolder} 
            editable={disabled && false}
            value={value}
            style={[styles.input, style, disabled && {backgroundColor: '#F5F5F5', borderWidth: 0}]}
            keyboardType={keyboardType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    input: {
        borderStyle: "solid",
        borderColor: "#B7B7B7",
        fontFamily: 'MadaniRegular',
        borderRadius: 7,
        borderWidth: StyleSheet.hairlineWidth,
        fontSize: 15,
        height: 50,
        paddingStart: 10,
        paddingEnd: 10,
      },
})