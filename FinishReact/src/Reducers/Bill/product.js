import * as Type from "../../Constrants/Actions";
var initialState = [];
const myProductCartReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowProductCart: {
      return action.data;
    }
    default:
      return state;
  }
};
export default myProductCartReducers;
