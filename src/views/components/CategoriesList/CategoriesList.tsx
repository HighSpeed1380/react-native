import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../../../colors';
import CustomText from '../Text/CustomText';
import { categories } from '../../../models/Data'

const numColumns = 2;
const { width } = Dimensions.get('window');
const itemWidth = width / numColumns;


export default function CategoriesList({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          activeOpacity={.6}
          style={styles.button}
          onPress={() => navigation.navigate('Category', { item })}
        >
          <CustomText style={styles.buttonText}>{item.categoryTitle}</CustomText>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <CustomText style={{ fontSize: 20 }}>الأقسام</CustomText>
      </View>
      <FlatList
        key={'_'}
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => '_' + item.id}
        // numColumns={numColumns}
        horizontal={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: '40%',
    position: 'relative',
    marginVertical: 20,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
    margin: 5,
    height: 58,
    width: '50%',
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
  },
  categories: {
    padding: 5,

  },
  categoriesContainer: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 8,
  },
  button: {
    padding: 13,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    // maxWidth: 120,
    backgroundColor: Colors.primary,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
  },
});








