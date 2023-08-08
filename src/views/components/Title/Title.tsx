import { StyleSheet, View } from 'react-native';
import CustomText from '../Text/CustomText';

type IProps = {
    children?: string;
    style?: any;
}


export default function Title({ children, style }: IProps) {
    return (
        <View style={styles.container}>
            <CustomText style={[styles.title, style]}>{children}</CustomText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4%',
    },
    title: {
        fontSize: 23,
        textAlign: 'right'
    }
})