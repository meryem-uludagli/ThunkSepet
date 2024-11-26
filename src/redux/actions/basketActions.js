import api from "../../utils/api";
import ActionTypes from "../actionTypes";

export const getCart = () => (dispatch) => {
  dispatch({ type: ActionTypes.CART_LOADING });

  api
    .get("/cart")
    .then((res) =>
      dispatch({ type: ActionTypes.CART_SUCCESS, paload: res.data })
    )
    .catch((err) => dispatch({ type: ActionTypes.CART_ERROR, payload: err }));
};
