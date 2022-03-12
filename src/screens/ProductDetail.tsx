import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../actions/ProductActions';
import { Spinner } from '../components';
import { heightPercentage } from '../Helper/Helper';

interface ProductDetailProps { }

const ProductDetail = (props: ProductDetailProps) => {
    const dispatch = useDispatch()
    const { id } = props.route.params;
    const { loadingDetail, productDetail } = useSelector((data) => data.productResponse)
    console.log('productDetail: ',productDetail);

    React.useEffect(() => {
        dispatch(getProductDetail(id))
    }, [])
    return (
        <View style={styles.container}>
            {loadingDetail ? <Spinner /> :
                <>
                    <View style={{ flex: 4 }}>
                        <Image source={{ uri: productDetail?.avatar }} style={{ flex: 1 }} resizeMode='contain' />
                    </View>
                    <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                        <View style={[styles.textContainer, styles.shadow]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.title}>{productDetail?.name}</Text>
                                <Text style={styles.title}>${productDetail?.price}</Text>
                            </View>
                            <Text style={styles.dsc}> {productDetail?.description}</Text>
                        </View>
                    </View>

                </>
            }

        </View>
    );
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: { color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
    dsc: { color: 'white' },
    textContainer: {
        backgroundColor: 'black',
        height: '80%',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: -20,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },

});
