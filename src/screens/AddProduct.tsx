import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getProducts } from '../actions/ProductActions';
import { CLEAR_ADD_PRODUCTS } from '../actions/types';
import { CategoryComponent, Input, Spinner } from '../components';

interface AddProductProps { }

const AddProduct = (props: AddProductProps) => {

  const dispatch = useDispatch()

  const { addData, loadinAdd } = useSelector((data) => data.productResponse)


  const [title, setTitle] = React.useState(__DEV__ ? 'Test 35' : '')
  const [price, setPrice] = React.useState(__DEV__ ? '23' : '')
  const [desc, setDesc] = React.useState(__DEV__ ? 'Test Desc' : '')
  const [cat, setCat] = React.useState(__DEV__ ? 'furnitures' : '')
  const [imageLink, setImageLink] = React.useState(__DEV__ ? 'https://www.evrensel.net/upload/dosya/193109.jpg' : '')

  React.useEffect(() => {
    if (addData) {
      dispatch({ type: CLEAR_ADD_PRODUCTS })
      props.navigation.pop()
    }
  }, [addData])
  return (
    <View style={styles.container}>
      <Input
        value={title}
        onChangeText={(val) => { setTitle(val) }}
        placeholder={'Add Title'}
      />

      <Input
        value={price}
        onChangeText={(val) => { setPrice(val) }}
        placeholder={'Price'}
      />

      <Input
        value={desc}
        onChangeText={(val) => { setDesc(val) }}
        placeholder={'Description'}
        containerStyle={{ height: 100 }}
        numberOfLine={3}
      />

      <Input
        value={imageLink}
        onChangeText={(val) => { setImageLink(val) }}
        placeholder={'Image Url'}
      />

      <View style={{ width: '100%' }}>
        <Text>Select Category:</Text>
        <CategoryComponent
          clickItem={(item: products) => setCat(item)}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          const params = {
            name: title,
            price: parseInt(price),
            avatar: imageLink,
            category: cat.name,
            description: desc
          }
          dispatch(addProduct(params))
        }}
        style={{ height: 50, backgroundColor: 'black', borderRadius: 20, width: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 50 }}>
        {loadinAdd ? <Spinner size='small' color='white' /> :
          <Text style={{ color: 'white' }}>Add</Text>}
      </TouchableOpacity>

    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  }
});
