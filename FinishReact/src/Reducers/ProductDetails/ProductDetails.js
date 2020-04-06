import * as Type from "../../Constrants/Actions";
var initialState = {};
const myProductDetailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowProductDetails: {
      state = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default myProductDetailsReducers;
