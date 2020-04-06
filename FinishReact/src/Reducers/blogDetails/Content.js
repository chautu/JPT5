import * as Type from "../../Constrants/Actions";

var initialState = {};
const myContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowContentBlogDetails: {
      return { ...action.data };
    }
    default:
      return { ...state };
  }
};
export default myContentReducer;
