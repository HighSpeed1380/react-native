import { StyleSheet, TextInput, View } from 'react-native';
import Label from '../Label/Label';
import CustomText from '../Text/CustomText';
import { Ionicons } from '@expo/vector-icons';
import DismissKeyboard from '../DismissKeyboard/DismissKeyboard';

// type Iprops = {
//     placeHolder: string;
//     style: React.StyleProp<any>;
// }

export default function SearchInput({ placeHolder, style, onPressIcon }) {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
            <Ionicons onPress={onPressIcon} style={styles.icon} name="filter" size={24} color="black" suppressHighlighting={true} />
            <TextInput placeholder={placeHolder} style={[styles.input, style]}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 7,
    },
    icon: {
        padding: 10,
    },
    input: {
        borderStyle: "solid",
        borderColor: "#B7B7B7",
        width: '87%',
        textAlign: 'right',
        fontSize: 15,
        height: 50,
        paddingStart: 10,
        paddingEnd: 10,
      },
})