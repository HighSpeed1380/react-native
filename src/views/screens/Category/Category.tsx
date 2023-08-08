import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, FlatList, TouchableWithoutFeedback, LogBox } from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard/DismissKeyboard';
import SearchInput from '../../components/SearchInput/SearchInput';
import ServiceProviderCard from '../../components/ServiceProviderCard/ServiceProviderCard';
import Title from '../../components/Title/Title';
import RBSheet from "react-native-raw-bottom-sheet";
import CustomText from '../../components/Text/CustomText';
import Colors from '../../../colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { MaterialIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import Lottie from 'lottie-react-native';
import { serviceProviders, bookingAvailability } from '../../../models/Data'
import Slider from '@react-native-community/slider';
import Button from '../../components/Button/Button';


export default function Category({ navigation, route }) {
    const refRBSheet = useRef();
    const [expanded, setExpanded] = useState(false)
    const [priceFilterOnSlide, setPriceFilterOnSlide] = useState(0)
    const [priceFilterOnCompelte, setPriceFilterOnCompelte] = useState(0)
    const [mappedData, setMappedData] = useState()
    const { item } = route.params;

    const filteredList = serviceProviders.filter((serviceProvider) => serviceProvider.serviceProviderCategory === item?.categoryType)
    const dataForDisplay = expanded ? item?.availableServices : item?.availableServices?.slice(0, 3)

    

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Title>{item?.categoryTitle}</Title>
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


    LogBox.ignoreAllLogs();
    return (
        <>
            <DismissKeyboard>
                <ScrollView>
                    <SafeAreaView style={styles.container}>
                        <View style={{ marginTop: '8%', marginBottom: '8%' }}>
                            <SearchInput placeHolder='ابحث هنا' onPressIcon={() => refRBSheet.current.open()} />
                        </View>
                        <View style={styles.serviceProvidersContainer}>
                            {
                                filteredList?.map((data, index) => (
                                    <ServiceProviderCard
                                        key={index}
                                        serviceProviderName={data.serviceProviderName}
                                        serviceProviderDescription={data.serviceProviderDescription}
                                        serviceProviderIcon={data.serviceProviderIcon}
                                        onPress={() => navigation.navigate('ServiceProviderProfile', { data })}

                                    />
                                ))
                            }
                        </View>
                        {
                            filteredList?.length === 0 &&
                            (
                                <>
                                    <LottieView style={styles.cat} source={require('../../../assets/cat.json')} autoPlay loop />

                                    <CustomText style={{ alignSelf: 'center' }}>لا يوجد مزودين خدمة في هذا القسم</CustomText>

                                </>


                            )
                        }
                        <RBSheet
                            ref={refRBSheet}
                            animationType='fade'
                            closeOnDragDown={true}
                            dragFromTopOnly={true}
                            closeOnPressMask={true}
                            height={600}
                            customStyles={{
                                wrapper: {
                                    // backgroundColor: '',
                                },
                                draggableIcon: {
                                    backgroundColor: "#000"
                                }
                            }}
                        >
                            <ScrollView contentContainerStyle={{paddingBottom: 60}}>
                                <View style={styles.contentContainer}>
                                    <Title>فلتر البحث</Title>
                                    <CustomText style={{ marginTop: '10%', textAlign: 'right', fontSize: 15 }}>الخدمات المتوفرة</CustomText>
                                    <View style={styles.chipsContainer}>
                                        {
                                            dataForDisplay?.map((service, index) => (
                                                <>
                                                    <View key={index} style={styles.chipsContainer}>
                                                        <BouncyCheckbox
                                                            size={30}
                                                            style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}
                                                            fillColor={Colors.primary}
                                                            unfillColor="#FFFFFF"
                                                            text={service}
                                                            iconStyle={{ borderColor: Colors.primary, borderRadius: 3 }}
                                                            innerIconStyle={{ borderWidth: .6, borderRadius: 3 }}
                                                            textStyle={{ fontFamily: 'MadaniRegular', textDecorationLine: "none", color: 'black' }}
                                                            onPress={(isChecked: boolean) => { }}
                                                        />
                                                    </View>
                                                </>
                                            ))
                                        }
                                        <TouchableWithoutFeedback onPress={() => setExpanded(!expanded)} >
                                            <View style={styles.showMore}>
                                                <CustomText style={{ textAlign: 'right', marginLeft: 14 }}>{expanded ? 'اظهر القليل' : 'اظهر المزيد'}</CustomText>
                                                <MaterialIcons name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={19} color={Colors.primary} />
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>

                                    <View style={styles.divider} />

                                    <CustomText style={{ marginTop: '10%', textAlign: 'right', fontSize: 15 }}>الأسعار</CustomText>
                                    <View style={styles.pricesContainer}>
                                        <Slider
                                            style={{ width: '100%', height: 40, alignSelf: 'center', marginTop: 15 }}
                                            minimumValue={10}
                                            maximumValue={100}
                                            onValueChange={setPriceFilterOnSlide}
                                            onSlidingComplete={setPriceFilterOnCompelte}
                                            minimumTrackTintColor="#3b82f6"
                                            maximumTrackTintColor="#bfdbfe"
                                        />
                                        <View style={styles.priceBox}>
                                            <CustomText>SAR {Math.trunc(priceFilterOnSlide)}</CustomText>
                                            <CustomText style={{ color: '#9ca3af' }}>السعر المحدد</CustomText>
                                        </View>
                                        <View style={styles.pricesCheckContainer}>
                                            <BouncyCheckbox
                                                size={25}
                                                style={{ flexDirection: 'row-reverse', }}
                                                fillColor={Colors.primary}
                                                unfillColor="#FFFFFF"
                                                text='من الأقل الى الاعلى'
                                                iconStyle={{ borderColor: Colors.primary, borderRadius: 3 }}
                                                innerIconStyle={{ borderWidth: .6, borderRadius: 3 }}
                                                textStyle={{ fontFamily: 'MadaniRegular', textDecorationLine: "none", color: 'black', fontSize: 12, marginRight: 6 }}
                                                onPress={(isChecked: boolean) => { }}
                                            />
                                            <BouncyCheckbox
                                                size={25}
                                                style={{ flexDirection: 'row-reverse', }}
                                                fillColor={Colors.primary}
                                                unfillColor="#FFFFFF"
                                                text='من الاعلى الى الأقل'
                                                iconStyle={{ borderColor: Colors.primary, borderRadius: 3 }}
                                                innerIconStyle={{ borderWidth: .6, borderRadius: 3 }}
                                                textStyle={{ fontFamily: 'MadaniRegular', textDecorationLine: "none", color: 'black', fontSize: 12, marginRight: 6 }}
                                                onPress={(isChecked: boolean) => { }}
                                            />
                                        </View>
                                    </View>
                                    <View style={[styles.divider, {marginTop: '12%'}]} />
                                    <CustomText style={{ marginTop: '10%', textAlign: 'right', fontSize: 15 }}>نوع الحجز</CustomText>
                                    <View style={{marginTop: '5%',}}>
                                    {
                                            bookingAvailability?.map((bookingType, index) => (
                                                <>
                                                    <View key={index} style={styles.chipsContainer}>
                                                        <BouncyCheckbox
                                                            size={30}
                                                            style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}
                                                            fillColor={Colors.primary}
                                                            unfillColor="#FFFFFF"
                                                            text={bookingType.title}
                                                            iconStyle={{ borderColor: Colors.primary, borderRadius: 3 }}
                                                            innerIconStyle={{ borderWidth: .6, borderRadius: 3 }}
                                                            textStyle={{ fontFamily: 'MadaniRegular', textDecorationLine: "none", color: 'black' }}
                                                            onPress={(isChecked: boolean) => { }}
                                                        />
                                                    </View>
                                                </>
                                            ))
                                        }
                                    </View>
                                    <View style={[styles.divider, {marginTop: '10%'}]} />
                                    <Button buttonText='حفظ التغييرات' style={{width: '100%', marginTop: '12%'}} onPress={() => refRBSheet.current.close()}/>
                                </View>
                            </ScrollView>
                        </RBSheet>
                    </SafeAreaView>
                </ScrollView>
            </DismissKeyboard>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginHorizontal: 15,
    },
    cat: {
        width: 300,
        height: 300,
        marginTop: '6%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    serviceProvidersContainer: {
        alignSelf: 'center',
    },
    contentContainer: {
        flex: 1,
        marginHorizontal: 15,
    },
    chipsContainer: {
        // justifyContent: 'space-between',
        marginVertical: 15,
    },
    chip: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        height: 58,
        width: '50%',
        borderRadius: 5,
    },
    button: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        backgroundColor: Colors.primary,
        borderRadius: 10
    },
    row: {
        flex: 1,
        justifyContent: 'space-around'
    },
    showMore: {
        marginTop: '5%',
        flexDirection: 'row-reverse',
        // justifyContent: 'space-around',
        alignItems: 'center',
    },
    divider: {
        marginTop: 15,
        borderColor: "#B7B7B7",
        borderBottomWidth: .6,
        width: '100%'
    },
    priceBoxesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    },
    priceBox: {
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 60,
        width: '100%',
        backgroundColor: '#f9fafb',
        borderRadius: 7,
    }, 
    pricesCheckContainer: {
        marginTop: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})