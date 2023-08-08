import { StyleSheet, View } from "react-native";
import CustomText from "../../components/Text/CustomText";
import Button from "../../components/Button/Button";
import LottieView from 'lottie-react-native';


export default function Success({ navigation, route }) {
    const { title } = route.params;
    return (
        <>
            <CustomText style={styles.successMesseage}>{title}</CustomText>
            <LottieView style={styles.success} source={require('../../../assets/success.json')} autoPlay />
            <Button
                style={{ alignSelf: 'center', marginTop: '110%' }}
                buttonText='العودة الى القائمة الرئيسية'
                onPress={() => navigation.navigate('Home')}
            />
        </>
    )
}

const styles = StyleSheet.create({
    success: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    successMesseage: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: '50%',
    }
})