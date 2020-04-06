import * as Type from "../../Constrants/Actions";
var initialState = [];
const myListBlogReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowListBlog: {
      state = action.data;
      return state;
    }
    default:
      return state;
  }
};
export default myListBlogReducers;
