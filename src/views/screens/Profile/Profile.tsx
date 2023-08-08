import { SafeAreaView, StyleSheet, View, TouchableOpacity, LogBox } from 'react-native';
import CustomText from '../../components/Text/CustomText';
import Colors from '../../../colors';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Profile() {
    // TODO: Restructure this to give eact settingType a link to navigate to
    const generalInfo = [
        'معلوماتي', 'عناويني', 'خدمات محفوظة', 'تغيير كلمة السر'
    ]

    const securityInfo = [
        'طرق الدفع', 'الخصوصية وسياسة الأستخدام', 'مركز المساعدة'
    ]

    LogBox.ignoreAllLogs();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <FontAwesome style={{ alignSelf: 'center' }} name="user-circle" size={100} color={Colors.primary} />
                <CustomText style={{ marginTop: '3.6%' }}>تغيير صورة العرض</CustomText>
                <CustomText style={{ marginTop: '5%', fontSize: 18 }}>مرحباً، بسام عبدالله</CustomText>
            </View>
            <View style={styles.userInfoContainer}>
                <View style={[styles.userInfoInnerContainer, {height: 198, maxHeight: 198}]}>
                    {
                        generalInfo.map((general, i) => (
                            <>
                                <TouchableOpacity key={i} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginTop: '2%', padding: 5, }}>
                                    <CustomText>{general}</CustomText>
                                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                                </TouchableOpacity>
                                <View style={styles.divider} />
                            </>
                        ))
                    }
                </View>
                <View style={styles.userInfoInnerContainer}>
                {
                        securityInfo.map((security, i) => (
                            <>
                                <TouchableOpacity key={i} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginTop: '2%', padding: 5, }}>
                                    <CustomText>{security}</CustomText>
                                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                                </TouchableOpacity>
                                <View style={styles.divider} />
                            </>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '5%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginHorizontal: 15,
    },
    headerContainer: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        marginBottom: '3%',
    },
    userInfoContainer: {
        flex: 2.6,
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    userInfoInnerContainer: {
        top: -30,
        width: '100%',
        height: 162,
        maxHeight: 162,
        borderRadius: 10,
        // borderWidth: 2,
        // marginHorizontal: 5,
        backgroundColor: '#f9fafb',
    },
    divider: {
        marginTop: 6,
        borderColor: "#B7B7B7",
        borderBottomWidth: .6,
        alignSelf: 'center',
        width: '95%'
    }
})