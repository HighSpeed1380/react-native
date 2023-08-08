import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import CustomText from '../Text/CustomText';

type IProps = {
    serviceProviderName: string,
    serviceProviderDescription: string,
    serviceProviderIcon: string,
    onPress?: any,
}

export default function ServiceProviderCard({ serviceProviderName, serviceProviderDescription, serviceProviderIcon, onPress } : IProps) {

    return (
        <TouchableOpacity onPress={onPress}  style={styles.container}>
            <View style={styles.iconContainer}>
                <Image
                    source={{ uri: serviceProviderIcon }}
                    style={styles.icon}
                />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.serviceProviderName}>
                    <CustomText style={{ fontSize: 16 }}>{serviceProviderName}</CustomText>
                </View>
                <View style={styles.serviceProviderDescription}>
                    <CustomText style={{ textAlign: 'right', lineHeight: 21 }}>{serviceProviderDescription}</CustomText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 3,
        height: 155,
        maxHeight: 155,
        // minHeight: '30%',
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        // padding: 10,
        alignSelf: 'center',
        // alignItems: 'center',
        margin: 10,
        backgroundColor:'#f9fafb',
        borderRadius: 10,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '6%',
    },
    icon: {
        height: 70,
        width: 70,
        borderRadius: 50,
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