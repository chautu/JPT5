import * as Type from "../../Constrants/Actions";
var initialState = {};
const myMenuInFormReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.MenuInformUser: {
      state = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default myMenuInFormReducers;
