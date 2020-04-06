import * as Type from "../../Constrants/Actions";
var initialState = {};
const mySlideHomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowSlideHome: {
      state = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default mySlideHomeReducers;
