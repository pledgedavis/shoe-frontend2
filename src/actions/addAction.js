import { ADD_PRODUCT_CART } from './type'
// whenever products are clicked by user this action is ran 

export const addCart = (productName) => {

    return (dispatch) => {
        console.log("Adding to Basket")
        console.log("Product:", productName)
        
        dispatch({
            type: ADD_PRODUCT_CART,
            payload: productName
        })
    }
}