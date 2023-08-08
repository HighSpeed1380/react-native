import { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import CustomText from '../../components/Text/CustomText';
import Title from '../../components/Title/Title';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Notifications({ navigation }) {
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Title>الإشعارات</Title>
            ),
            headerLeft: () => (
                <MaterialIcons
                    style={{ marginLeft: 15 }}
                    name="keyboard-arrow-left"
                    size={28}
                    color={Colors.primary}
                    onPress={() => navigation.goBack()}
                    suppressHighlighting={true}
                />
            ),
        })
    }, [])

    // TODO: Move this to data and link it with each user
    const notificationsData = [
        { title: 'محمد - خدمات السيارات قادم بالطريق ', icon: <FontAwesome5 name="walking" size={26} color={Colors.primary} />, time: '2:15 pm' },
        { title: 'محمد - خدمات السيارات موجود بالموقع ', icon: <Entypo name="location" size={24} color={Colors.primary} />, time: '3:00 pm' },
        { title: 'محمد - خدمات السيارات غادر الموقع ', icon: <FontAwesome5 name="walking" size={26} color={Colors.primary} />, time: '3:25 pm' },
        { title: 'تم شراء مساحات ', icon: <FontAwesome5 name="money-bill-wave" size={21} color={Colors.primary} />, time: '3:55 pm' },
        { title: 'محمد - خدمات السيارات موجود بالموقع ', icon: <Entypo name="location" size={24} color={Colors.primary} />, time: '4:20 pm' },
        { title: 'محمد - خدمات السيارات انهى تغيير المساحات بنجاح', icon: <Ionicons name="checkmark-circle" size={26} color={Colors.primary} />, time: '5:00 pm' },
    ]
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    {
                        notificationsData.map((notification, i) => (
                            <View key={i} style={styles.notificationContainer}>
                                <View style={styles.timeContainer}>
                                    <CustomText style={{ fontSize: 10, color: '#9ca3af' }}>{notification.time}</CustomText>
                                </View>
                                <View style={styles.textContainer}>
                                    <CustomText style={{ textAlign: 'right', fontSize: 14, lineHeight: 20 }}>{notification.title}</CustomText>
                                </View>
                                <View style={styles.iconContainer}>
                                    {notification.icon}
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginHorizontal: 15,
        marginTop: '1%',
    },
    notificationContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 90,
        maxHeight: 90,
        backgroundColor: '#f9fafb',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: '5%'
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    textContainer: {
        flex: 5,
        // borderWidth: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: 'blue',
    },
    timeContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    }
})