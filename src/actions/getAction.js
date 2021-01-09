import { GET_NUMBERS_CART } from './type'

export const getNumbers  = () => {
    return (dispatch) => {
        console.log("getting numbers")
        dispatch({
            type: GET_NUMBERS_CART
        });
    }
}