import * as Type from "../../Constrants/Actions";
var initialState = {};
const mySlideBlogReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowSlideBlog: {
      state = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default mySlideBlogReducers;
