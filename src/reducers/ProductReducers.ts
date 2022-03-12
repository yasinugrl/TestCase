import {
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILD,

    GET_CATEGORIES_SUCCESS,

    GET_PRODUCT_DETAIL_START,
    GET_PRODUCTS_DETAIL_SUCCESS,
    GET_PRODUCTS_DETAIL_FAILD,

    ADD_PRODUCTS_START,
    ADD_PRODUCTS_SUCCESS,
    ADD_PRODUCTS_FAILD,
    CLEAR_ADD_PRODUCTS
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    loadingDetail: false,
    productDetail: null,
    products: [],
    categories: [],

    loadinAdd: false,
    addData: null
};
export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_PRODUCTS_START:
            return { ...state, loading: true };
        case GET_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.payload.reverse(), };
        case GET_PRODUCTS_FAILD:
            return { ...state, loading: false, };

        case GET_PRODUCT_DETAIL_START:
            return { ...state, loadingDetail: true };
        case GET_PRODUCTS_DETAIL_SUCCESS:
            return { ...state, loadingDetail: false, productDetail: action.payload, };
        case GET_PRODUCTS_DETAIL_FAILD:
            return { ...state, loadingDetail: false, };

        case GET_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, };


        case ADD_PRODUCTS_START:
            return { ...state, loadinAdd: true };
        case ADD_PRODUCTS_SUCCESS:
            return { ...state, loadinAdd: false, addData: action.payload, products: [action.payload, ...state.products] };
        case ADD_PRODUCTS_FAILD:
            return { ...state, loadinAdd: false, };

        case CLEAR_ADD_PRODUCTS:
            return { ...state, addData: null };

        default:
            return state;
    }
};

