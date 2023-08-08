import { useState } from 'react';
import { Button, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Dropdown from '../../components/Dropdown/Dropdown';
import Input from '../../components/Input/Input';
import DismissKeyboard from '../../components/DismissKeyboard/DismissKeyboard';
import Signup from '../Signup/Signup';
import Title from '../../components/Title/Title';
import SearchInput from '../../components/SearchInput/SearchInput';
import ChatBox from '../../components/ChatBox/ChatBox';
import { chatData } from '../../../models/Data';

export default function DirectMessages({ navigation }) {
  
  return (
    <>
      <DismissKeyboard>
        <ScrollView>
          <SafeAreaView style={styles.container}>
            <View style={{ marginTop: '8%', marginBottom: '8%' }}>
              <SearchInput placeHolder='ابحث هنا' />
            </View>
            {
              chatData.map((data, index) => (
                <ChatBox
                  key={index}
                  serviceProviderName={data.serviceProviderName}
                  serviceProviderChatPreview={data.serviceProviderChatPreview}
                  serviceProviderIcon={data.serviceProviderIcon}
                  timing={data.timing}
                  // onPress={() => navigation.navigate('AuthStack', { screen: 'Signup' })}
                  onPress={() => navigation.navigate('Chat', { data })}
                />
              ))
            }
          </SafeAreaView>
        </ScrollView>
      </DismissKeyboard>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
});