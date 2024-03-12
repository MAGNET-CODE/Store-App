import { useContext, createContext, useReducer } from "react";
import { sumProducts } from '../helper/helper';
const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if(!state.selectedItems.find((item) => item.id === action.payload.id)){
        state.selectedItems.push({...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
      case "REMOVE_ITEM":
        const newselectedItems = state.selectedItems.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          selectedItems: [...newselectedItems], 
          ...sumProducts(newselectedItems),
        };
      case "INCREASE":
        const increaseIndex = state.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );
        state.selectedItems[increaseIndex].quantity++;
        return {
          ...state,
          ...sumProducts(state.selectedItems),
        };
      case "DECREASE":
        const decreaseIndex = state.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );
        state.selectedItems[decreaseIndex].quantity--;
        return {
          ...state,
          ...sumProducts(state.selectedItems),
        };
      case "CHECKOUT":
        return {
          selectedItems: [],
          itemsCounter: 0,
          totalPrice: 0,
          checkout: true,
        };
    default:
      throw new Error("Invalid Action!");
  }
}

const CartContext = createContext();

function CartProvider({children}) {
    const [state, dispach] = useReducer(reducer, initialState);
    
  return (
    <CartContext.Provider value={{state, dispach}}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  const {state, dispach} = useContext(CartContext);
  return [state, dispach];
};

export default CartProvider;
export { useCart };