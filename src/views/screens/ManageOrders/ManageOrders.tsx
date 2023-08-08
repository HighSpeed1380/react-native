import { SafeAreaView, StyleSheet, View } from 'react-native';
import CustomText from '../../components/Text/CustomText';
import Colors from '../../../colors';
import SwitchSelector from "react-native-switch-selector";
import { useState } from 'react';
import OnGoingOrders from '../../components/OnGoingOrders/OnGoingOrders';
import CompletedOrders from '../../components/CompletedOrders/CompletedOrders';
import Bookings from '../../components/Bookings/Bookings';


export default function ManageOrders() {
    const [selectedPage, setSelectedPage] = useState(2)
    const options = [
        { label: "طلبات مكتملة", value: 0 },
        { label: "حجوزاتك", value: 1 },
        { label: "قيد التفيذ", value: 2 },
    ];
    console.log('selectedPage', selectedPage)
    return (
        <View style={styles.container}>
            <SwitchSelector
                options={options}
                initial={2}
                buttonColor={Colors.primary}
                borderRadius={7}
                hasPadding
                textStyle={{ fontFamily: 'MadaniRegular' }}
                selectedTextStyle={{ fontFamily: 'MadaniRegular' }}
                borderWidth={StyleSheet.hairlineWidth}
                onPress={value => setSelectedPage(value)}
            />
            {
                selectedPage === 2 && <OnGoingOrders />
            }
            {
                selectedPage === 1 && <Bookings />
            }
            {
                selectedPage === 0 && <CompletedOrders />
            }


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '5%',
        marginHorizontal: 15
    }
})