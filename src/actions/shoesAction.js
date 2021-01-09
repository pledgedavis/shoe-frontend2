import { FETCH_ALL_SHOES } from './type'



export function fetchAllShoes(){
    return (dispatch) => {
        fetch('/shoes')
        .then(resp => resp.json())
        .then(shoes => dispatch({
            type: 'FETCH_ALL_SHOES',
            payload: shoes
        }))
    }
}

