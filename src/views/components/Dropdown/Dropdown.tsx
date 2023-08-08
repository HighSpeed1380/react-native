import { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Label from '../Label/Label';
import DismissKeyboard from '../DismissKeyboard/DismissKeyboard'

type IProps = {
  open: boolean;
  setOpen: React.Dispatch<any>;
  value: string;
  itemKey?: string;
  setValue: React.Dispatch<any>;
  items: {
    label: string;
    value: string;
  }[];
  setItems?: React.Dispatch<any>;
  placeholder: string;
  label: string;
  onSelectItem?: React.Dispatch<any>
}

// TODO: Use react hookform controller and remove value and setValue
// Refrence: https://snack.expo.dev/@mali_ai/react-native-dropdown-picker?platform=web

export default function Dropdown({ open, setOpen, value, setValue, items, setItems, placeholder, label, itemKey, onSelectItem }: IProps) {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Label label={label} />
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          itemKey={itemKey}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onSelectItem={onSelectItem}
          rtl={true}
          placeholder={placeholder}
          textStyle={{
            textAlign: 'right',
            fontFamily: 'MadaniRegular'
          }}
          style={{
            borderColor: "#B7B7B7",
            borderWidth: StyleSheet.hairlineWidth
          }}
          dropDownContainerStyle={{
            borderColor: "#B7B7B7",
            borderWidth: StyleSheet.hairlineWidth
          }}
        />
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});