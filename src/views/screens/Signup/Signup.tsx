import { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard/DismissKeyboard';
import Dropdown from '../../components/Dropdown/Dropdown';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from '../../../colors';
import Button from '../../components/Button/Button';
import CustomText from '../../components/Text/CustomText';


export default function Signup({ navigation }) {
  const [openCountries, setOpenCountries] = useState(false);
  const [valueCountries, setValueCountries] = useState(null);

  const [openCities, setOpenCities] = useState(false);
  const [valueCities, setValueCities] = useState(null);

  const countries = [
    { label: 'المملكة العربية السعودية', value: 'Saudi Arabia' },
    { label: 'دولة الكويت', value: 'Kuwait' }
  ]

  const cities = [
    { label: 'الرياض', value: 'Riyadh' },
    { label: 'جدة', value: 'Jeddah' },
    { label: 'الدمام', value: 'Dammam' },
  ]

  // Note: I used a view to make an underline because there is a problem with the font and can't accept the textDecorationLine prop
  return (
    <>
      <DismissKeyboard>
        <View style={styles.container}>
          <Title>تسجيل حساب جديد</Title>
          <View style={{ zIndex: 200 }}>
            <Dropdown
              open={openCountries}
              value={valueCountries}
              items={countries}
              setOpen={setOpenCountries}
              setValue={setValueCountries}
              placeholder="اختر الدولة"
              label='الدولة'
            />
          </View>
          <View style={{ zIndex: 100 }}>
            <Dropdown
              open={openCities}
              value={valueCities}
              items={cities}
              setOpen={setOpenCities}
              setValue={setValueCities}
              placeholder="اختر المدينة"
              label='المدينة / المنطقة'
            />
          </View>
          <Input placeHolder='🇸🇦 +966' label='رقم الهاتف' />
          <BouncyCheckbox
            size={19}
            style={{ flexDirection: 'row-reverse' }}
            fillColor={Colors.primary}
            unfillColor="#FFFFFF"
            text=" اوافق على الشروط والأحكام"
            iconStyle={{ borderColor: Colors.primary, borderRadius: 3 }}
            innerIconStyle={{ borderWidth: 2, borderRadius: 3 }}
            textStyle={{ fontFamily: 'MadaniRegular', textDecorationLine: "none", color: 'black' }}
            onPress={(isChecked: boolean) => { }}
          />
          <View style={styles.button}>
            <Button buttonText='تسجيل' />
          </View>

          {/* <View style={styles.guestContainer}>
          <CustomText style={styles.guest}>اكمل كزائر</CustomText>
          <View style={styles.underline}/>
          </View> */}
        </View>
      </DismissKeyboard>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // borderWidth: 2,
    marginHorizontal: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  guest: {
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  guestContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  underline: {
    borderWidth: 1,
    width: 65,
    marginTop: 5,
    borderColor: Colors.primary
  }
})

