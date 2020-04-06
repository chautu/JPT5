import * as Type from "../../Constrants/Actions";

var initialState = [];
const myAuthorBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowAuthorBlogDetails: {
      return action.data;
    }
    default:
      return [...state];
  }
};
export default myAuthorBlogReducer;
