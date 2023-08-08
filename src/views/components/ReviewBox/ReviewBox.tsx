import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import CustomText from '../Text/CustomText';
import { AntDesign } from '@expo/vector-icons';

type IProps = {
    clientName: string,
    clientDescription: string,
    clienIcon: string,
    onPress?: () => void,
    clientStarsReview: number;
}


export default function ReviewBox({ clientName, clientDescription, clienIcon, clientStarsReview , onPress, } : IProps) {

    const stars = Array.from({length: clientStarsReview}, (_, index) => {
        return <AntDesign name="star" size={16} color="#fde047" />
      });

    return (
        <View onPress={onPress}  style={styles.container}>
            <View style={styles.iconContainer}>
                <Image
                    source={{ uri: clienIcon }}
                    style={styles.icon}
                />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.serviceProviderName}>
                    <CustomText style={{ fontSize: 16 }}>{clientName}</CustomText>
                </View>
                <View style={styles.serviceProviderDescription}>
                    <CustomText style={{ textAlign: 'right', lineHeight: 21 }}>{clientDescription}</CustomText>
                </View>
                <View style={{marginTop: '6%', flexDirection: 'row'}}>
                    {stars}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '12%',
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        alignSelf: 'center',
        margin: 10,
        backgroundColor:'#f9fafb',
        borderRadius: 10,
    },
    iconContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    icon: {
        height: 70,
        width: 70,
        borderRadius: 50,
        alignSelf: 'center'
    },
    contentContainer: {
        alignItems: 'flex-end',
        margin: 10,
        justifyContent: 'center',
        width: '70%',
    },
    serviceProviderName: {
        marginBottom: 7,
    },
    serviceProviderDescription: {

    },
})