import React from 'react';
import { ActivityIndicator, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from './screens/ProductDetail';
import ProductList from './screens/ProductList';
import AddProduct from './screens/AddProduct';

interface RouterProps { }

const Router = (props: RouterProps) => {


    const RootStack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{  }}>
                <RootStack.Screen
                    name="ProductList"
                    component={ProductList}
                />
                <RootStack.Screen
                    name="ProductDetail"
                    component={ProductDetail}
                    options={{ title: 'UPayment Store', headerBackTitle: '' }}
                />
                <RootStack.Screen
                    name="AddProduct"
                    component={AddProduct}
                    options={{ headerBackTitle: ''}}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

const styles = {
    options: { headerShown: false }
}

export default Router;
