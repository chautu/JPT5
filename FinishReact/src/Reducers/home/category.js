import * as Type from "../../Constrants/Actions";
var initialState = [];
const myCategoryHomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowCategoryHome: {
      state = action.data;
      return state;
    }
    default:
      return [...state];
  }
};
export default myCategoryHomeReducers;
