import { ScrollView, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import Colors from '../../../colors';
import CustomText from '../Text/CustomText';
import Pulse from 'react-native-pulse'
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import Modal from "react-native-modal";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

/// order status could be: ON_THE_WAY, ORDER_UNDERWAY, PURCHASING_ITEMS, ORDER_COMPLETED, CANCLED.
export default function OnGoingOrders() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [initialLocation, setInitialLocation] = useState({
        latitude: 24.774265,
        longitude: 46.738586,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <View style={styles.header}>
                            <CustomText style={{ fontSize: 16 }}>جاري شراء السلع لطلبك</CustomText>
                            <View style={styles.orderStatusIndicator}>
                                <View style={[styles.dot, { backgroundColor: '#D9D9D9' }]} />
                                <View style={[styles.divider, { borderColor: 'transparent' }]} />
                                <View style={[styles.dot, styles.onGoingDot]}><View style={styles.innerDot} /></View>
                                <View style={styles.divider} />
                                <View style={styles.dot} />
                                <View style={styles.divider} />
                                <View style={styles.dot} />
                            </View>
                        </View>

                        <View style={styles.serviceProviderContainer}>
                            <View style={styles.locationContainer}>
                                <View style={styles.pulseContainer}>
                                    <Pulse
                                        color=''
                                        numPulses={2}
                                        speed={50}
                                        duration={2000}
                                        initialDiameter={70}
                                        diameter={50}
                                        pulseStyle={{ borderColor: Colors.primary, borderWidth: 3 }}
                                    />
                                    <FontAwesome5 suppressHighlighting={true} onPress={toggleModal} name="location-arrow" size={24} color="black" />
                                </View>
                            </View>
                            <View style={styles.textContainer}>
                                <CustomText style={{ textAlign: 'right', fontSize: 14, lineHeight: 20 }}>
                                    علي محمد علي{"\n"}
                                    <CustomText style={{ fontSize: 10, color: '#9ca3af' }}>شركة مرني</CustomText>
                                </CustomText>
                            </View>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={require('../../../assets/face1.png')}
                                    style={styles.icon}
                                />
                            </View>
                        </View>

                        <Modal
                            isVisible={isModalVisible}
                            onBackdropPress={toggleModal}
                            backdropTransitionOutTiming={0}
                            
                        >
                            <View style={styles.modalView}>
                            <MapView
                                    provider={PROVIDER_GOOGLE}
                                    style={styles.map}
                                    showsUserLocation={true}
                                    initialRegion={initialLocation}
                                    zoomEnabled={true}
                                >
                                </MapView>
                            </View>
                        </Modal>

                        <View style={styles.orderInfoContainer}>
                            <View style={styles.orderHeader}>
                                <View style={styles.orderNumberContainer}>
                                    <CustomText style={{ letterSpacing: 3 }}>#449860</CustomText>
                                </View>
                                <CustomText style={{ fontSize: 14, textAlign: 'right' }}>تفاصيل الطلب</CustomText>
                            </View>

                            <View style={{ marginTop: '2%' }}>
                                <View style={styles.orderDetailRow}>
                                    <View style={styles.priceContainer}><CustomText>80.00 ر.س</CustomText></View>
                                    <View style={styles.itemContainer}><CustomText>تغيير مساحات</CustomText></View>
                                    <View style={styles.orderIndexNumber}><CustomText>1</CustomText></View>
                                </View>
                                <View style={styles.orderDetailRow}>
                                    <View style={styles.priceContainer}><CustomText>10.00 ر.س</CustomText></View>
                                    <View style={styles.itemContainer}><CustomText>مساحات</CustomText></View>
                                    <View style={styles.orderIndexNumber}><CustomText>2</CustomText></View>
                                </View>
                            </View>

                            <View style={{ marginTop: '8%', }}>
                                <CustomText style={{ fontSize: 14, textAlign: 'right' }}>الفاتورة</CustomText>
                                <View style={styles.receiptDetails}>
                                    <View style={styles.orderTotalNumberContainer}><CustomText>90.00 ر.س</CustomText></View>
                                    <View style={styles.orderTotalContainer}><CustomText>قيمة الطلب:</CustomText></View>
                                </View>
                                <View style={styles.receiptDetails}>
                                    <View style={styles.orderTotalNumberContainer}><CustomText>13.50 ر.س</CustomText></View>
                                    <View style={styles.orderTotalContainer}><CustomText>الضريبة المضافة:</CustomText></View>
                                </View>
                                <View style={styles.receiptDetails}>
                                    <View style={styles.orderTotalNumberContainer}><CustomText>103.50 ر.س</CustomText></View>
                                    <View style={styles.orderTotalContainer}><CustomText>المبلغ المستحق:</CustomText></View>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: '8%'}}>
                            <TouchableOpacity activeOpacity={.6} style={styles.applePay}>
                                <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}> Pay</Text>
                            </TouchableOpacity>
                        </View>


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
        width: '100%',
        alignSelf: 'center',
    },
    innerContainer: {
        backgroundColor: '#f9fafb',
        width: '100%',
        height: 510,
        maxHeight: 510,
        borderRadius: 10,
        paddingHorizontal: 15,

    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '6%',
    },
    orderStatusIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '8%',

    },
    dot: {
        borderRadius: 100 / 2,
        height: 20,
        width: 20,
        backgroundColor: Colors.primary
    },
    onGoingDot: {
        backgroundColor: '#f9fafb',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.primary,
        borderWidth: 1
    },
    innerDot: {
        borderRadius: 100 / 2,
        height: 10,
        width: 10,
        backgroundColor: Colors.primary
    },
    divider: {
        borderColor: Colors.primary,
        borderBottomWidth: 1,
        width: '20%'
    },

    serviceProviderContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 90,
        maxHeight: 90,

        marginTop: '5%',
        // backgroundColor: 'yellow'
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    textContainer: {
        flex: 7,
        // borderWidth: 2,
        flexDirection: 'column',
        paddingRight: 5,
        justifyContent: 'center',
        // backgroundColor: 'blue',
    },
    locationContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgrounsdColor: 'yellow',
    },
    icon: {
        borderRadius: 100 / 2,
        height: 55,
        width: 55,
    },
    orderInfoContainer: {
        marginTop: '5%',
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orderNumberContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,

    },
    orderDetailRow: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    priceContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    itemContainer: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    orderIndexNumber: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    receiptDetails: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    orderTotalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    orderTotalNumberContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    applePay: {
        backgroundColor: 'black',
        height: 50,
        width: '100%',
        alignSelf: 'center',
        borderRadius: 4,
        justifyContent: 'center',
    },
    modalView: {
        // flex: 6,
        height: 430,
        width: 300,
        borderRadius: 7,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    map: {
        flex: 1,
        width: '100%',
        borderRadius: 7,
    }

})