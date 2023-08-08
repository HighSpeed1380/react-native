import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import CustomText from '../Text/CustomText';
import { ProgressBar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';


export default function CustomerReviewsBox() {
    return (
        <View style={styles.container}>
            <View style={styles.ratingNumber}>
                <View style={styles.totalReviewsContainer}>
                    <CustomText style={{fontSize: 27, marginBottom: '8%'}}>4.6 / 5</CustomText>
                    <CustomText style={{color: '#9ca3af', marginBottom: '8%'}}>بناءاً على ١٢٠ تقييم</CustomText>
                    <View style={{flexDirection: 'row'}}>
                    <AntDesign style={styles.star} name="star" size={24} color="#fde047" />
                    <AntDesign style={styles.star} name="star" size={24} color="#fde047" />
                    <AntDesign style={styles.star} name="star" size={24} color="#fde047" />
                    <AntDesign style={styles.star} name="star" size={24} color="#fde047" />
                    <AntDesign style={styles.star} name="star" size={24} color='#F5F5F5' />
                    </View>
                </View>
            </View>
            <View style={styles.starsContainer}>
                <View style={styles.starRow}>
                    <CustomText style={styles.starText}>5 نجمة</CustomText>
                    <ProgressBar progress={0.9} color="#fde047" style={styles.progressBar} />
                </View>
                <View style={styles.starRow}>
                    <CustomText style={styles.starText}>4 نجمة</CustomText>
                    <ProgressBar progress={0.8} color="#fde047" style={styles.progressBar} />
                </View>
                <View style={styles.starRow}>
                    <CustomText style={styles.starText}>3 نجمة</CustomText>
                    <ProgressBar progress={0.6} color="#fde047" style={styles.progressBar} />
                </View>
                <View style={styles.starRow}>
                    <CustomText style={styles.starText}>2 نجمة</CustomText>
                    <ProgressBar progress={0.4} color="#fde047" style={styles.progressBar} />
                </View>
                <View style={styles.starRow}>
                    <CustomText style={styles.starText}>1 نجمة </CustomText>
                    <ProgressBar progress={0.1} color="#fde047" style={styles.progressBar} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 155,
        maxHeight: 155,
        borderRadius: 10,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#f9fafb',
        marginBottom: '3%'
    },
    starsContainer: {
        // backgroundColor: 'blue',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    starRow: {
        flexDirection: 'row',
        marginVertical: 6,
    },
    totalReviewsContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    ratingNumber: {
        // backgroundColor: 'red',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        height: 10,
        width: 85,
        marginLeft: 10,
    },
    starText: {
        color: '#9ca3af',
    },
    star: {
        marginHorizontal: 4,
    }
})