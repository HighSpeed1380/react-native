import { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Alert, } from 'react-native';
import CustomText from '../../components/Text/CustomText';
import { MaterialIcons } from '@expo/vector-icons';
import Title from '../../components/Title/Title';
import Colors from '../../../colors';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';
import Button from '../../components/Button/Button';
import AddressBox from '../../components/AddressBox/AddressBox';



export default function ReservationFlowStep2({ navigation, route }) {
    const { day, time, serviceProviderName, selectedService } = route.params;
    const [mapRegion, setmapRegion] = useState({});
    const [initialLocation, setInitialLocation] = useState({
        latitude: 24.774265,
        longitude: 46.738586,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Title>تأكيد الحجز</Title>
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

    const getUserLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission to access location was denied');
        }
        let location = await Location.getCurrentPositionAsync()
        setmapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0041, // Controls zoom
            longitudeDelta: 0.0021 // Controls zoom
        })
    }

    useEffect(() => {
        getUserLocation()
    }, [])

    // TODO: move this to data and link it with each user
    const userSavedAddress = [
        { addressType: 'العمل' , streetName: 'شارع الحسن بن علي 2008', cityName: 'الرياض - المملكة العربية السعودية', phoneNumber: '0536344281' },
    ]


    return (
        <>
            <ScrollView contentContainerStyle={{paddingBottom: '70%'}} >
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <View style={styles.reservationInfoContainer}>
                            <CustomText style={{ textAlign: 'right', fontSize: 16 }}>تفاصيل الحجز</CustomText>
                            <View style={styles.reservationInfo}>
                                <View style={styles.reservationInfoRows}>
                                    <CustomText>{serviceProviderName}</CustomText>
                                    <CustomText>اسم مزود الخدمة: </CustomText>
                                </View>
                                <View style={styles.reservationInfoRows}>
                                    <CustomText>{selectedService}</CustomText>
                                    <CustomText>نوع الخدمة: </CustomText>
                                </View>
                                <View style={styles.reservationInfoRows}>
                                    <CustomText>{day}</CustomText>
                                    <CustomText>تاريخ الحجز: </CustomText>
                                </View>
                                <View style={styles.reservationInfoRows}>
                                    <CustomText>{time}</CustomText>
                                    <CustomText>توقيت الحجز: </CustomText>
                                </View>
                            </View>
                        </View>

                        <View style={styles.mapContainer}>
                            <CustomText style={{ textAlign: 'right', fontSize: 16 }}>اختر موقعك</CustomText>
                            <View style={styles.mapViewContainer}>
                                <MapView
                                    provider={PROVIDER_GOOGLE}
                                    style={styles.map}
                                    showsUserLocation={true}
                                    initialRegion={initialLocation}
                                    zoomEnabled={true}
                                >
                                    <Marker
                                        draggable={true}
                                        coordinate={mapRegion}
                                        onDragEnd={(e) => {
                                            setmapRegion({
                                                latitude: e.nativeEvent.coordinate.latitude,
                                                longitude: e.nativeEvent.coordinate.longitude,

                                            })
                                        }}
                                    />
                                </MapView>
                                <Button onPress={getUserLocation} buttonText='حدد موقعك' style={styles.locateButton} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '8%' }}>
                            <View style={styles.divider} />
                            <CustomText style={{ alignSelf: 'center' }}>او</CustomText>
                            <View style={styles.divider} />
                        </View>

                        <View style={styles.addressContainer}>
                            <CustomText style={{ textAlign: 'right', fontSize: 16, marginBottom: '3%' }}>اختر عنوان مسجل سابقاً</CustomText>
                            {
                                userSavedAddress.map((address, i) => (
                                    <AddressBox
                                    addressType={address.addressType}
                                    streetName={address.streetName}
                                    cityName={address.cityName}
                                    phoneNumber={address.phoneNumber}
                                     />
                                ))
                            }
                        </View>

                        <Button 
                        buttonText='أكد حجزك' 
                        style={{width: '100%', marginTop: '8%'}} 
                        onPress={() => navigation.navigate('Success', {title: 'تم حجز موعدك بنجاح !'})}
                        />

                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '5%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    innerContainer: {
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '4%',
    },
    reservationInfoContainer: {
        // backgroundColor: 'yellow'
    },
    reservationInfo: {
        width: '100%',
        marginTop: '3%',
        padding: 7,
        borderRadius: 10,
        backgroundColor: '#f9fafb',

    },
    reservationInfoRows: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 9,
    },
    mapContainer: {
        marginTop: '12%',
        // backgroundColor: 'red',
        maxHeight: '50%'
    },
    map: {
        alignSelf: 'center',
        width: '100%',
        height: '65%',
        borderRadius: 10,
        marginTop: '3%',

    },
    locateButton: {
        backgroundColor: 'black',
        marginTop: '5%',
        width: '100%'
    },
    divider: {

        borderColor: "#B7B7B7",
        borderBottomWidth: .6,
        width: '45%'
    },
    addressContainer: {
        marginTop: '12%',
    }
})