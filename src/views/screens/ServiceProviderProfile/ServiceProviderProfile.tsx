import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Share, Alert, Image, LogBox } from 'react-native';
import Colors from '../../../colors';
import CustomText from '../../components/Text/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Dropdown from '../../components/Dropdown/Dropdown';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import ReviewBox from '../../components/ReviewBox/ReviewBox';
import CustomerReviewsBox from '../../components/CustomerReviewsBox/CustomerReviewsBox';


export default function ServiceProviderProfile({ navigation, route }) {
    const { data } = route.params;
    const [heartPressed, setHeartPressed] = useState(false)

    const [openServices, setOpenServices] = useState(false);
    const [valueServices, setValueServices] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Share this service provider',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => null,
            headerRight: () => (
                <View style={styles.rightIcons}>
                    <Feather
                        onPress={onShare} 
                        style={{ marginRight: '16%' }}
                        name="share"
                        size={20}
                        color="black"
                        suppressHighlighting={true}
                    />
                    <Ionicons
                        onPress={() => setHeartPressed(!heartPressed)}
                        name={heartPressed ? "heart" : 'heart-outline'}
                        size={24}
                        color={heartPressed ? "#dc2626" : 'black'}
                        suppressHighlighting={true}
                        style={{ marginRight: 15 }}
                    />
                </View>
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
    }, [heartPressed])

    LogBox.ignoreAllLogs();
    return (
        <>
            <ScrollView contentContainerStyle={{paddingBottom: 50}}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={{ uri: data?.serviceProviderIcon }}
                                style={styles.icon}
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <View style={styles.serviceProviderName}>
                                <CustomText style={{ fontSize: 16, textAlign: 'right' }}>{data?.serviceProviderName}</CustomText>
                            </View>
                            <View style={styles.serviceProviderDescription}>
                                <CustomText style={{ textAlign: 'right', lineHeight: 21 }}>{data?.serviceProviderDescription}</CustomText>
                            </View>
                        </View>
                    </View>

                    <View style={styles.body}>
                        <View style={{ zIndex: 200, marginBottom: '8%' }}>
                            <Dropdown
                                open={openServices}
                                value={valueServices}
                                items={data?.services}
                                setOpen={setOpenServices}
                                setValue={setValueServices}
                                placeholder="اختر الخدمات"
                                label='الخدمات'
                                onSelectItem={(item) => {
                                    setSelectedService(item.label)
                                  }}
                            />
                        </View>


                        <Input
                            multiline={true}
                            numberOfLines={10}
                            label='عن الخدمة'
                            style={styles.textArea}
                            value={valueServices}
                            disabled
                        />

                        <View style={styles.buttonsContainer}>
                            {/* navigate to reservationFlowStep1 and pass the data */}
                            <Button 
                            style={styles.button} 
                            buttonText='احجز موعد' 
                            onPress={() => navigation.navigate('ReservationFlowStep1', 
                            {
                                serviceProviderName: data?.serviceProviderName,
                                selectedService: selectedService

                            })} 
                            /> 
                            <Button style={styles.button} buttonText='تواصل' onPress={() => navigation.navigate('Chat', { data })} />
                        </View>
                    </View>

                    <View style={styles.reviews}>
                        <CustomText style={{ fontSize: 16, textAlign: 'right', marginBottom: '3%' }}>تقييمات مزود الخدمة</CustomText>
                        <CustomerReviewsBox/>
                        {
                            data?.clientReviews?.map((review, index) => (
                                <ReviewBox
                                    key={index}
                                    clientName={review.clientName}
                                    clientDescription={review.clientDescription}
                                    clienIcon={review.clienIcon}
                                    clientStarsReview={review.clientStarsReview}
                                />
                            ))
                        }
                    </View>

                </SafeAreaView>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start', // Change it to flex-start
        alignItems: 'center',
        marginHorizontal: 15,
        // borderWidth: 2,
    },
    rightIcons: {
        flexDirection: 'row',

    },
    headerContainer: {
        marginTop: '5%',
        flexDirection: 'row-reverse'
    },
    iconContainer: {
        flex: 1,
        // borderWidth: 1,
        // backgroundColor: 'yellow'

    },
    icon: {
        height: 100,
        width: 100,
        alignSelf: 'center'

    },
    contentContainer: {
        flex: 2,
        // backgroundColor: 'red',
        padding: 6,

    },
    serviceProviderName: {
        marginBottom: '3%'
    },
    body: {
        marginTop: '8%',
        width: '100%',
    },
    textArea: {
        textAlign: 'right',
        fontSize: 14,
        lineHeight: 21,
        height: 150,
    },
    buttonsContainer: {
        marginTop: '12%',
        flexDirection: 'row',
        alignSelf: 'center',

    },
    button: {
        width: '45%',
        marginHorizontal: 17
    },
    reviews: {
        marginTop: '12%',
        width: '100%'
    }

})

