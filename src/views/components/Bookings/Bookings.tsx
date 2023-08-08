import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Dimensions, Platform } from 'react-native';
import CustomText from '../../components/Text/CustomText';
import Colors from '../../../colors';
import Button from '../Button/Button';
import Modal from "react-native-modal";


export default function Bookings() {
    const [isModalVisible, setModalVisible] = useState(false);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={{ uri: 'https://play-lh.googleusercontent.com/GhZvZxiugJc2g2JljHZ8Mhe1lXXadN2dKcQEvToWVg1xUZlyAc3HAvLufOPJdMtffs1F' }}
                                style={styles.icon}
                            />
                        </View>
                        <View style={styles.bookingDetailsContainer}>
                            <View style={styles.bookingDetails}>
                                <View style={styles.firstDetail}><CustomText>شركة مرني</CustomText></View>
                                <View style={styles.secondDetail}><CustomText>اسم مزود الخدمة:</CustomText></View>
                            </View>
                            <View style={styles.bookingDetails}>
                                <View style={styles.firstDetail}><CustomText>خدمات السيارات</CustomText></View>
                                <View style={styles.secondDetail}><CustomText>القسم:</CustomText></View>
                            </View>
                            <View style={styles.bookingDetails}>
                                <View style={styles.firstDetail}><CustomText>2023-04-12</CustomText></View>
                                <View style={styles.secondDetail}><CustomText>تاريخ الحجز:</CustomText></View>
                            </View>
                        </View>
                        <Button buttonText='إجراء' style={{ width: '100%', marginTop: '10%' }} onPress={toggleModal} />

                        <Modal
                            isVisible={isModalVisible}
                            onBackdropPress={toggleModal}
                            backdropTransitionOutTiming={0}
                            
                        >
                            <View style={styles.modalView}>

                                <Button buttonText="الغاء الموعد" onPress={toggleModal} style={{marginBottom: '5%', width: '80%', backgroundColor: '#dc2626'}} />
                                <Button buttonText="تغيير الموعد" onPress={toggleModal} style={{width: '80%',}}  />
                            </View>
                        </Modal>
                    </View>
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
        alignItems: 'center',
        marginTop: '5%',
        alignSelf: 'center',
        width: '100%',
    },
    innerContainer: {
        backgroundColor: '#f9fafb',
        width: '100%',
        height: 350,
        maxHeight: 350,
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    iconContainer: {
        marginTop: '5%',
    },
    icon: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center'
    },
    bookingDetailsContainer: {

    },
    bookingDetails: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    firstDetail: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    secondDetail: {
        flex: 1,
        flexDirection: 'column',
        marginTop: '3%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    modalView: {
        // flex: 6,
        height: 260,
        width: 300,
        borderRadius: 7,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },



})