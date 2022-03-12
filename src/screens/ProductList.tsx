import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts } from '../actions/ProductActions';
import { Spinner, CategoryComponent, ProductItems } from '../components';
import { widthPercentage } from '../Helper/Helper';
import { categories, products } from '../reducers/Model';

interface ProductListProps { }

const ProductList = (props: ProductListProps) => {
  const dispatch = useDispatch()
  const { products, loading } = useSelector((data) => data.productResponse)
  const [productData, setProductData] = React.useState([])

  React.useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [])


  React.useEffect(() => {
    setProductData(products)
  }, [products])

  const clickCat = (item: categories) => {
    const data = [...products]
    const filterData = data.filter(f => f.category == item.name)
    setProductData(filterData)
  }
  const renderCategories = () => {
    return (
      <CategoryComponent
        clickItem={(item: products) => clickCat(item)}
      />
    )
  }

  const renderItem = (item: products) => {
    return (

      <ProductItems item={item} {...props} />
    )
  }

  return (
    <View style={styles.container}>
      {loading ?
        <Spinner size='large' color='blue' /> :
        <>
          {renderCategories()}
          <FlatList
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 20 }}
            data={productData}
            extraData={productData}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => renderItem(item)}
          />
        </>
      }
      <TouchableOpacity
        onPress={() => props.navigation.navigate('AddProduct')}
        style={styles.addButton}>
        <Text style={styles.buttonTitle}>+</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 12,
  },
  itemPrice: {
    fontSize: 13,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  buttonTitle: { color: 'white', fontSize: 30 }
});
