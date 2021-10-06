import Product from "./Product";
export const initialState={
    basket:[],
    user:null
}


//this is a selector and its a good practice to have selectors
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);


 


//we can change this order of item and amoutn,here item.price is appending in item each time
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      
        case "REMOVE_FROM_BASKET":
          const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];
    
          if (index >= 0) {
            newBasket.splice(index, 1);
    
          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in basket!`
            )
          }
    
          return {
            ...state,
            basket: newBasket
          }

      case 'SET_USER':
        return{
        ...state,
        user:action.user
        };

      default:
        return state;


    }

  };
export default reducer;