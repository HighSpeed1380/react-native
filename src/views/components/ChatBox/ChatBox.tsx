import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import CustomText from '../Text/CustomText';

type IProps = {
    serviceProviderName: string,
    serviceProviderChatPreview: string,
    serviceProviderIcon: string,
    timing: string,
    onPress: React.Dispatch<any>;
}

export default function ChatBox({ serviceProviderName, serviceProviderChatPreview, serviceProviderIcon, timing, onPress } : IProps) {

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
                <View style={styles.serviceProviderChatPreview}>
                    <CustomText style={{ textAlign: 'right', lineHeight: 21 }}>{serviceProviderChatPreview}</CustomText>
                </View>
                <View style={{marginTop: '4%'}}>
                <CustomText style={styles.timing}>{timing}</CustomText>
                </View>
            </View>
        </TouchableOpacity>
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
        width: '75%',
        // borderWidth: 2,
        padding: 6
    },
    serviceProviderName: {
        marginBottom: '8%',
    },
    serviceProviderChatPreview: {

    },
    timing: {
        fontSize: 10,
        color: '#9ca3af'
        
    }
})