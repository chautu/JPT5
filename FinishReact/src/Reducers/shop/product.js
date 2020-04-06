import * as Type from "../../Constrants/Actions";
var initialState = [];
const myProductShopReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowProductShop: {
      state = action.data;
      return state;
    }
    default:
      return state;
  }
};
export default myProductShopReducers;
