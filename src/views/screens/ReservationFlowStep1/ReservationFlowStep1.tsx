import { useEffect, useContext, useState, useRef } from 'react';
import { StyleSheet, View, SafeAreaView, Animated, FlatList, Dimensions } from 'react-native';
import CustomText from '../../components/Text/CustomText'
import Title from '../../components/Title/Title';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../colors';
import { Calendar } from 'react-native-calendars';
import { ExpandingDot } from "react-native-animated-pagination-dots";
import Button from '../../components/Button/Button';


function format(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const getMarkedDates = (selectedDay, reservedDates) => {
    const markedDates = {};

    markedDates[(selectedDay)] = {
        selected: true,
        customStyles: {
            container: {
                backgroundColor: Colors.primary,
                borderRadius: 7,
            },
        }
    };

    reservedDates.forEach((reservedDate) => {
        const formattedDate = format(new Date(reservedDate.date));
        markedDates[formattedDate] = {
            ...markedDates[formattedDate],
            disabled: true,
        };
    });

    return markedDates;
};

export default function ReservationFlowStep1({ navigation, route }) {
    const { serviceProviderName, selectedService } = route.params;
    // const scrollX = useRef(new Animated.Value(0)).current;
    const [selectedDay, setSelectedDay] = useState('')  
    const [selectedTime, setSelectedTime] = useState('')  
    const [selectedButton, setSelectedButton] = useState(null);

    // TODO: Move this to data
    const reservedDates = [
        {
            date: '2023-03-25T19:20:41.490Z',
        },
        {
            date: '2023-03-26T19:20:41.490Z',
        },
        {
            date: '2023-03-01T19:20:41.490Z',
        },
        {
            date: '2023-03-04T19:20:41.490Z',
        },
        {
            date: '2023-03-06T19:20:41.490Z',
        },
        {
            date: '2023-03-16T19:20:41.490Z',
        },
        {
            date: '2023-03-20T19:20:41.490Z',
        },
        {
            date: '2023-03-13T19:20:41.490Z',
        },
    ]; 


    // TODO: Move this to data
    const avaliableTime = [
        {
            id: 1,
            time: '01:00 pm to 02:00 pm',
        },
        {
            id: 2,
            time: '03:00 pm to 04:00 pm',
        },
        {
            id: 3,
            time: '05:00 pm to 06:00 pm',
        },
        {
            id: 4,
            time: '07:00 pm to 08:00 pm',
        },
    ];
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Title>اختيار الموعد</Title>
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

    const handleButtonClick = (buttonId, buttonTime) => {
        setSelectedTime(buttonTime)
        setSelectedButton(buttonId);
      };
    const numColumns = Math.ceil(avaliableTime.length / 2);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', marginTop: '8%', backgroundColor: 'black' }}>
                <Calendar
                    hideExtraDays={true}
                    disableAllTouchEventsForDisabledDays={true}
                    onDayPress={day => {
                        setSelectedDay(day.dateString)
                    }}
                    firstDay={1}
                    // enableSwipeMonths={true}
                    // headerStyle={{

                    // }}
                    hideArrows={true}
                    markingType={'custom'}
                    markedDates={getMarkedDates(selectedDay, reservedDates)}
                    theme={{
                        //@ts-ignore
                        'stylesheet.calendar.header': {
                            monthText: {
                                fontFamily: 'MadaniRegular',
                                marginBottom: 6,
                            },
                            header: {
                                textAlign: 'left',
                                marginLeft: 9
                            }
                        },
                        todayTextColor: '#2d4150',
                    }}
                />
            </View>
            <View style={styles.divider} />
            <CustomText style={{ fontSize: 16, textAlign: 'right', marginTop: '12%', width: '100%', marginRight: 16 }}>ما هو الوقت المناسب؟</CustomText>
            <View style={styles.timeChipsContainer}>
                    <FlatList
                    data={avaliableTime}
                    numColumns={numColumns}
                    keyExtractor={(item) => '_' + item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                    contentContainerStyle={{
                        alignSelf: 'center',
                    }}
                    renderItem={({ item }) => (
                        <View style={{width: '50%', marginVertical: 8 }}>
                            <Button 
                            key={item.id}
                            onPress={() => handleButtonClick(item.id, item.time)}
                            buttonTextStyle={styles.buttonText} 
                            style={styles.timeButton} 
                            isOutlined={selectedButton === item.id ? false : true} 
                            buttonText={item.time}
                            />
                        </View>
                    )}
                    />
            </View>
            <Button 
            style={{marginTop: '15%', width: '100%' }} 
            buttonText='التالي'
            onPress={() => navigation.navigate('ReservationFlowStep2', {
                serviceProviderName,
                selectedService,
                day: selectedDay,
                time: selectedTime,

            })}
            />


        </SafeAreaView>
    )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    timeChipsContainer: {
        marginTop: '1%',
        // backgroundColor: 'black',
        height: '20%'
        
    },
    timeButton: {
        width: '93%',
        alignSelf: 'center',
        marginHorizontal: 7,
    },
    buttonText: {
        fontSize: 13,
    },
    divider: {
        marginTop: '12%',
        borderColor: "#B7B7B7",
        borderBottomWidth: .6,
        width: '100%'
    }
})









{/* <FlatList
                    data={avaliableTime}
                    // numColumns={2}
                    // columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15 }}
                    keyExtractor={(item) => '_' + item.key}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: false,
                        }
                    )}
                    pagingEnabled
                    horizontal
                    decelerationRate={'normal'}
                    scrollEventThrottle={16}
                    renderItem={({ item }) => item.component}
                />
                <ExpandingDot
                    data={avaliableTime}
                    expandingDotWidth={30}
                    scrollX={scrollX}
                    inActiveDotOpacity={0.6}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        backgroundColor: '#347af0',
                        borderRadius: 5,
                        marginHorizontal: 5
                    }}
                    containerStyle={{
                        top: 210,
                        
                    }}
                /> */}



                // const avaliableTime = [
    //     {
    //         key: '1',
    //         time: '01:00 pm to 02:00 pm',
    //         component: 
    //         <View>
    //         <View style={{width: 280 , height: '30%', backgroundColor: 'yellow', borderWidth: 2, }}/>
    //         </View>,
    //     },
    //     {
    //         key: '2',
    //         time: '03:00 pm to 04:00 pm',
    //         component: 
    //         <View>
    //         <View style={{ width: 280 , height: '30%', backgroundColor: 'red', borderWidth: 2, }}/>
    //         </View>,
    //     },
    //     {
    //         key: '3',
    //         time: '05:00 pm to 06:00 pm',
    //     },
    //     {
    //         key: '4',
    //         time: '07:00 pm to 08:00 pm',
    //     },
    //     {
    //         key: '5',
    //         time: '09:00 pm to 10:00 pm',
    //     },
    //     {
    //         key: '6',
    //         time: '11:00 pm to 12:00 am',
    //     },
    //     {
    //         key: '7',
    //         time: '1:00 am to 02:00 am',
    //     },
    //     {
    //         key: '8',
    //         time: '03:00 am to 04:00 am',
    //     },
    // ];