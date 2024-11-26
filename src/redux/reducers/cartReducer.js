import Types from "./../actionTypes";

const initialState = {
  cart: [],
  isLoading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CART_LOADING:
      return { ...state, isLoading: true };

    case Types.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload?.message };

    case Types.CART_SUCCESS:
      return { ...state, isLoading: false, error: null, cart: action.payload };

    default:
      return state;
  }
};
export default cartReducer;
