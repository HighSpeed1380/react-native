import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import NotificationBadge from '../../components/NotificationBadge/NotificationBadge';
import Header from '../../components/Header/Header';
import CustomText from '../../components/Text/CustomText';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { SliderBox } from "react-native-image-slider-box";
import Colors from '../../../colors';
import { famousServiceProviders } from '../../../models/Data'
import ServiceProviderCard from '../../components/ServiceProviderCard/ServiceProviderCard';

const images = [
  'https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/13714797/pexels-photo-13714797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
];

export default function Home({ navigation, route }) {

  return (
    <>
    <ScrollView contentContainerStyle={{paddingBottom: 90}} showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.container}>        
      <Header navigation={navigation} />
      <View style={styles.carousel}>
        <View style={styles.offersContainer}>
          <CustomText style={styles.offersHeader}>العروض</CustomText>
        </View>
        <SliderBox
          images={images}
          ImageComponentStyle={{ borderRadius: 15 }}
          autoplay
          circleLoop
          parentWidth={340}
          imageLoadingColor={Colors.primary}
        />
      </View>
      
      <CategoriesList navigation={navigation} />
      
      <View style={{marginTop: 25}}>

      <View style={styles.offersContainer}>
          <CustomText style={styles.offersHeader}>الأكثر شهرة</CustomText>
      </View>
      {
        famousServiceProviders.map((data, index) => (
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
      
    </SafeAreaView>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 15,
  },
  offersContainer: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 8,
  },
  offersHeader: {
    fontSize: 20
  },
  carousel: {
    flex: 1,
    
    padding: 1,
    position: 'relative',
    margin: 2,
    minHeight: '28%'
  },
  categoriesList: {
    position: 'absolute',
    top: 450,
    height: '5%',
    width: '100%',
    alignSelf: 'center'
  },
  divider: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 0.4,
    width: '95%',
    borderColor: '#e5e7eb'
  }


});