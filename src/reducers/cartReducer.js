import { ADD_PRODUCT_CART, GET_NUMBERS_CART, FETCH_ALL_SHOES } from "../actions/type";




const initialState = {
    
    FETCH_ALL_SHOES,
   cartNumbers: 0,
   cartCost: 0,
   products: {
       yeezy: {
           name: "first yeezy",
           tagName: 'first yeezy',
           price: 340.00,
           quantity: 0,
           inCart: false,
       },
       yeezy2: {
        name: "second yeezy",
        tagName: 'second yeezy',
        price: 330.00,
        quantity: 0,
        inCart: false,
    },
    yeezy3: {
        name: "third yeezy",
        tagName: 'third yeezy',
        price: 390.00,
        quantity: 0,
        inCart: false,
    }
   }


}

export default (state = initialState, action) => {
   switch(action.type){
       case ADD_PRODUCT_CART:
           let addQuantity = {...state.products[action.payload]}
        console.log(addQuantity);
        addQuantity.numbers += 1;
        addQuantity.inCart = true
        console.log(addQuantity);

         return {
             ...state,
            cartNumbers: state.cartNumbers + 1,
            cartCost: state.cartCost + state.products[action.payload].price,
            products: {
                ...state.products,
                [action.payload]: addQuantity
            }
         }
         case GET_NUMBERS_CART:
             return {
                 ...state
             }
       default:
      return state;
    }
}