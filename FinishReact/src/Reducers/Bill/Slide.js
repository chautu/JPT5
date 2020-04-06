import * as Type from "../../Constrants/Actions";
var initialState = {};
const mySildeCartReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowSlideCart: {
      state = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default mySildeCartReducers;
