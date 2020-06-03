import * as types from './../Constants/Actiontypes'
export const actAddToCart = (product, quantity) =>{
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actDeleteProduct = (product) =>{
    return {
        type : types.DELETE_PRODUCT,
        product
    }
}
export const actUpdateAmount = (product,quantity) =>{
    return {
        type : types.UPDATE_AMOUNT,
        product,
        quantity
    }
}