import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '../../components/Text/CustomText';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Colors from '../../../colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default function Chat({ route, navigation }) {
    const { data } = route.params;

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerTitle: () => null,
    //         headerBackground: () => (
    //             <View style={{
    //                 backgroundColor: '#F5F5F5', 
    //                 width: '87%', 
    //                 marginTop: '12%',
    //                 height: '100%', 
    //                 borderRadius: 10, 
    //                 alignSelf: 'center' 
    //             }}/>
    //         ),
    //         headerRight: () => null,
    //         headerLeft: () => null,
    //     })
    // }, [])

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <Image
                        source={{ uri: data.serviceProviderIcon }}
                        style={styles.icon}
                    />
                    <View style={styles.nameContainer}>
                        <CustomText style={styles.name}>{data.serviceProviderName}</CustomText>
                    </View>
                </View>
            </View>

            <View style={styles.body}>
                <ScrollView style={{marginTop: '5%'}}>
                <View style={styles.bubble}>
                    <CustomText style={styles.bubbleText}>السلام عليكم</CustomText>
                    <View style={styles.rightArrow} />
                    <View style={styles.rightArrowOverlap} />
                </View>
                </ScrollView>
            </View>


            <KeyboardAvoidingView enabled={true} behavior='padding' style={styles.chat}>
                <View style={styles.voiceIconContainer}>
                    <MaterialIcons name="keyboard-voice" size={24} color={Colors.primary} />
                </View>

                
                <View style={styles.chatInputContainer}>
                        <TextInput multiline={true} style={styles.chatInput} />
                </View>

                <View style={styles.cameraIconContainer}>
                    <Feather name="camera" size={24} color={Colors.primary} />
                </View>
                
            </KeyboardAvoidingView>
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // borderWidth: 1,
        marginHorizontal: 15,

    },
    header: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: '2%',
        // minHeight: 30,
        // height: 30,
    },
    headerContainer: {
        // borderWidth: 1,
        width: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    icon: {
        height: 70,
        width: 70,
        borderRadius: 50,
        margin: 3,
    },
    nameContainer: {
        margin: '2%',
    },
    name: {
        fontSize: 18
    },
    arrowContainer: {
        marginRight: '20%',

    },
    body: {
        flex: 8,
        // marginTop: '5%',
    
        // backgroundColor: 'yellow',
    },
    bubble: {
        backgroundColor: "#0078fe",
        padding: 10,
        marginLeft: '45%',
        borderRadius: 10,
        //marginBottom: 15,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        //maxWidth: 500,
    },
    rightArrow: {
        position: "absolute",
        backgroundColor: "#0078fe",
        //backgroundColor:"red",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomLeftRadius: 25,
        right: -10
    },

    rightArrowOverlap: {
        position: "absolute",
        backgroundColor: "white",
        // backgroundColor:"green",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomLeftRadius: 18,
        right: -20

    },
    bubbleText: {
        color: 'white',
        padding: 4
    },
    chat: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black'
    },
    chatInputContainer: {
        justifyContent: 'center',
        width: '80%'
    },
    chatInput: {
        backgroundColor: '#F5F5F5',
        heigth: '6%',
        fontSize: 15,
        height: 39,
        borderRadius: 16,
        paddingStart: 10,
        paddingEnd: 10,
    },
    voiceIconContainer: {
        margin: 4,
    },
    cameraIconContainer: {
        margin: 10
    }

})