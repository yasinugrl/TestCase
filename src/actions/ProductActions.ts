import { get, post } from "./api"
import { 
    GET_PRODUCTS_START, 
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_FAILD, 

    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILD,

    BASE_URL, 
    GET_PRODUCT_DETAIL_START,
    GET_PRODUCTS_DETAIL_SUCCESS,
    GET_PRODUCTS_DETAIL_FAILD,
    ADD_PRODUCTS_START,
    ADD_PRODUCTS_SUCCESS,
    ADD_PRODUCTS_FAILD
} from "./types"


export function getProducts() {
    return (dispatch: any) => {
        get(
            BASE_URL.concat(`products`),
            dispatch,
            GET_PRODUCTS_START,
            GET_PRODUCTS_SUCCESS,
            GET_PRODUCTS_FAILD,
        )
    }
}


export function getProductDetail(id: string) {
    return (dispatch: any) => {
        get(
            BASE_URL.concat(`products/${id}`),
            dispatch,
            GET_PRODUCT_DETAIL_START,
            GET_PRODUCTS_DETAIL_SUCCESS,
            GET_PRODUCTS_DETAIL_FAILD,
        )
    }
}

export function getCategories() {
    return (dispatch: any) => {
        get(
            BASE_URL.concat(`categories`),
            dispatch,
            GET_CATEGORIES_START,
            GET_CATEGORIES_SUCCESS,
            GET_CATEGORIES_FAILD,
        )
    }
}

export function addProduct(data: object) {
    return (dispatch: any) => {
        post(
            BASE_URL.concat(`categories`),
            data,
            dispatch,
            ADD_PRODUCTS_START,
            ADD_PRODUCTS_SUCCESS,
            ADD_PRODUCTS_FAILD,
        )
    }
}