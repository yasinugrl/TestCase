/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import { render, fireEvent, shallow } from '@testing-library/react-native'


import { Provider } from 'react-redux'
import store from '../src/reducers/Store';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { ProductItems } from '../src/components';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('The list contains all the product', () => {
  const { getAllByTestId } = render(<Provider store={store}><ProductItems /></Provider>)
  const itm = getAllByTestId('dataItem');
  store.productResponse.products.map(response => {
    expect(itm.length).toBe(response.length)
  })
})
