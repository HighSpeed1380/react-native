import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NotificationBadge from '../../components/NotificationBadge/NotificationBadge';
import Colors from '../../../colors';
import CustomText from '../Text/CustomText';

export default function Header({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
            <NotificationBadge onPress={() => navigation.navigate('Notifications')}  />
                <Text style={styles.header}>منادي</Text>
            </View>
            <View style={styles.subHeaderContainer}>
                <CustomText style={styles.subHeader}>ينادي لك كل شي</CustomText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 14,
        minHeight: '12%'
    },
    header: {
        fontSize: 28,
        fontFamily: 'MadaniRegular',    
        color: Colors.primary
    },
    subHeaderContainer: {
        marginTop:8,
        alignItems:'flex-end',
    },
    subHeader: {
        fontSize: 21,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});