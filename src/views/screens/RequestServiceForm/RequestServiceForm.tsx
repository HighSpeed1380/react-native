import { SafeAreaView, ScrollView, StyleSheet, TextInput, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import Colors from '../../../colors';
import Title from '../../components/Title/Title';
import CustomText from '../../components/Text/CustomText';
import Dropdown from '../../components/Dropdown/Dropdown';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Feather } from '@expo/vector-icons';
import DismissKeyboard from '../../components/DismissKeyboard/DismissKeyboard';
import * as ImagePicker from 'expo-image-picker';


export default function RequestServiceForm({ navigation }) {
    const [openCategories, setOpenCategories] = useState(false);
    const [valueCategories, setValueCategories] = useState(null);
    
    const [image, setImage] = useState();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
        });

        if(!result.canceled) {
            setImage(result.uri)
        }
    }

    const categories = [
        { id: '1', label: 'خدمات السيارات', value: 'carServices' },
        { id: '2', label: 'نقل وتركيب اثاث', value: 'moving' },
        { id: '3', label: 'تجميل', value: 'beauty' },
        { id: '4', label: 'عناية بالحيوانات', value: 'petCare' },
        { id: '5', label: 'خدمات المنزل', value: 'houseServices' },
        { id: '6', label: 'قص شعر', value: 'cuttingHair' },
    ]

    return (
        <>
            <DismissKeyboard>
                <SafeAreaView style={styles.container}>
                    <View style={{ zIndex: 200 }}>
                        <Dropdown
                            open={openCategories}
                            value={valueCategories}
                            items={categories}
                            setOpen={setOpenCategories}
                            setValue={setValueCategories}
                            placeholder='اختر القسم'
                            label='القسم'
                        />
                    </View>
                    <Input keyboardType='phone-pad' label='القيمة التي تريد دفعها' />
                    <Input
                        multiline={true}
                        numberOfLines={10}
                        style={styles.textArea} label='وصف المشكلة' 
                        />
                    <View style={styles.cameraRoll}>
                        <Feather onPress={pickImage} style={{ margin: 6 }} name="camera" size={24} color={Colors.primary} suppressHighlighting={true} />
                    </View>
                    <CustomText style={styles.text}>ملاحظة: سوف يتم التواصل معك على الرقم المسجل لدينا.</CustomText>
                    <Button style={styles.button} buttonText='ارفع الطلب' onPress={() => navigation.navigate('Success', {title: 'تم رفع طلبك بنجاح'})} />
                    {image && <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />}
                </SafeAreaView>
            </DismissKeyboard>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginHorizontal: 15,
    },
    innerContainer: {
        flex: 1,
    },
    textArea: {
        // backgroundColor: '#F5F5F5',
        // borderWidth: 0,
        height: 150,
        textAlignVertical: 'top',
        paddingTop: 15,


    },
    cameraRoll: {
        top: -65,
        // backgroundColor: '#F5F5F5',
        borderRadius: 7,
    },
    button: {
        alignSelf: 'center',
        width: '100%',
        marginBottom: '3%'
    },
    text: {
        textAlign: 'center',
        // marginBottom: '5%'
        justifyContent: 'center',
        alignItems: 'center',
    }
})