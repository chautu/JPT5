import * as Type from "../../Constrants/Actions";
var initialState = [];
const myCategoryBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowCategoryBlog: {
      state = action.data;
      return state;
    }
    default:
      return state;
  }
};
export default myCategoryBlogReducer;
