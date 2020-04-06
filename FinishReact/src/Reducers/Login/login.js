import * as Type from "../../Constrants/Actions";
var initialState = {};
const myLoginReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.Login: {
      state = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default myLoginReducers;
