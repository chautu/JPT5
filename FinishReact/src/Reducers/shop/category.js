import * as Type from "../../Constrants/Actions";
var initialState = [];
const myCategoryShopReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowCategoryShop: {
      state = action.data;
      return state;
    }
    default:
      return state;
  }
};
export default myCategoryShopReducers;
