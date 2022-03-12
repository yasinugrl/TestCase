import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { widthPercentage } from '../Helper/Helper';
import { products } from '../reducers/Model';

interface ProductItemsProps { 
    item: products
}

const ProductItems = (props: ProductItemsProps) => {
    const { item } = props 
    return (
        <TouchableOpacity testID='dataItem' onPress={() => props.navigation.navigate('ProductDetail', { id: item.id })} style={{ padding: 5, borderRadius: 20, backgroundColor: 'white', alignItems: 'center', width: widthPercentage(40), margin: 10 }}>
            <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20, }}>
                <Image source={{ uri: item.avatar }} style={{ width: widthPercentage(30), height: widthPercentage(30), marginBottom: 10 }} resizeMode='contain' />
                <View>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export {ProductItems};

const styles = StyleSheet.create({
    container: {},
    itemTitle: {
        fontSize: 12,
      },
      itemPrice: {
        fontSize: 13,
      }
});
