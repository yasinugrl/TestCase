import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { widthPercentage } from '../Helper/Helper';
import { categories } from '../reducers/Model';

interface CategoryItemsProps {
    clickItem?: () => void
}

const CategoryComponent = (props: CategoryItemsProps) => {

    const [activeCat, setActiveCat] = React.useState(null)

  const {  categories } = useSelector((data) => data.productResponse)


    const clickCat = (item: categories) => {
        setActiveCat(item.name)
        props.clickItem(item)
    }

    const renderCategoryItem = (item: categories) => {
        const isActive = item.name == activeCat
        return (
            <TouchableOpacity
                onPress={() => clickCat(item)}
                style={{
                    padding: 10,
                    margin: 10,
                    alignItems:
                        'center',
                    justifyContent: 'center',
                    borderRadius: 10,

                    backgroundColor: isActive ? 'white' : 'black',
                    borderWidth: isActive ? 1 : 0
                }}
            >
                <Text style={{ color: isActive ? 'black' : 'white' }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            horizontal
            keyboardShouldPersistTaps="always"
            data={categories}
            renderItem={({ item }) => renderCategoryItem(item)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center', paddingLeft: 20, }}
            style={{ flexGrow: 0, width: widthPercentage(100) }}
        />
    )
};

export {CategoryComponent};

const styles = StyleSheet.create({
    container: {}
});
