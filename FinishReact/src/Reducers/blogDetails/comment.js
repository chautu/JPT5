import * as Type from "../../Constrants/Actions";

var initialState = [];
const myCommentBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowCommentBlogDetails: {
      return action.data;
    }
    default:
      return [...state];
  }
};
export default myCommentBlogReducer;
