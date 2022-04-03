export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket) => basket.reduce((amount, item)=> item.price + amount, 0)

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      // Check if the basketId is equal to action Id
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // Items exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id : ${action.id}) as it's not in the basket`
        );
      }
      // return the state, but also set the basket to the newbasket
      return { ...state, basket: newBasket };

      case "SET_USER":
      return {...state, user:action.user}

    default:
      return state;
  }
};

export default reducer;
