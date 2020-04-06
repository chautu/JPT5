import * as Type from "../../Constrants/Actions";
var initialState = [];
const myCommentSlideHomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowCommentSlideHome: {
      return action.data;
    }
    default:
      return [...state];
  }
};
export default myCommentSlideHomeReducers;
