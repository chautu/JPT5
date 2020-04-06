import * as Type from "../../Constrants/Actions";
var initialState = {};
const mySlideShopReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowSlideShop: {
      state = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default mySlideShopReducers;
