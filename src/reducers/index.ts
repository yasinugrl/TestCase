import { combineReducers } from 'redux';
import ProductReducers from './ProductReducers';

export default combineReducers({
    productResponse: ProductReducers,
});