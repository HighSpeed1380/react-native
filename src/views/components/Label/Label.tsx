import { StyleSheet, Text, View } from 'react-native';
import CustomText from '../Text/CustomText';


export default function Label({ label }) {
    return (
        <View style={styles.container}>
            <CustomText style={styles.label}>{label}</CustomText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
    },
    label: {
        fontSize: 14,
        margin: 8,
        textAlign: 'right'
    }
})