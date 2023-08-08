import { StyleSheet, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import CustomText from '../Text/CustomText';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from '../../../colors';

type IProps = {
    addressType: string;
    streetName: string;
    cityName: string;
    phoneNumber: number;
}


export default function AddressBox({ addressType, streetName, cityName, phoneNumber }) {
    return (
        <TouchableWithoutFeedback>
        <View  style={styles.container}>
            <View style={styles.checkBoxContainer}>
                <BouncyCheckbox
                    style={styles.icon}
                    fillColor={Colors.primary}
                    unfillColor='#D9D9D9'
                    iconStyle={{ borderRadius: 3 }}
                    innerIconStyle={{ borderColor: 'transparent', borderRadius: 3 }}
                />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.streetNameContainer}>
                    <CustomText style={{ fontSize: 16 }}>{addressType}</CustomText>
                </View>
                <View style={styles.cityNameContainer}>
                    <CustomText style={styles.contentRows}>{streetName}</CustomText>
                </View>
                <View style={styles.cityNameContainer}>
                    <CustomText style={styles.contentRows}>{cityName}</CustomText>
                </View>
                <View style={styles.phoneNumberContainer}>
                    <CustomText style={styles.contentRows}>{phoneNumber}</CustomText>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 3,
        height: 155,
        maxHeight: 155,
        // minHeight: '30%',
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        // padding: 10,
        alignSelf: 'center',
        // alignItems: 'center',
        margin: 10,
        backgroundColor:'#f9fafb',
        borderRadius: 10,
    },
    checkBoxContainer: {
        flexDirection: 'column',
        // backgroundColor: 'red',
        width: '10%',
    },
    icon: {
        height: 70,
        width: '5%',
        alignSelf: 'center',
        borderRadius: 50,
        
    },
    contentContainer: {
        alignItems: 'flex-end',
        // margin: 10,
        justifyContent: 'center',
        width: '70%',
        // backgroundColor: 'red',
        
    },
    streetNameContainer: {
        marginBottom: 7,
    },
    cityNameContainer: {

    },
    phoneNumberContainer: {

    },
    contentRows: {
        textAlign: 'right', 
        lineHeight: 26
    }
})