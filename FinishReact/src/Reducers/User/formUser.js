import * as Type from "../../Constrants/Actions";
var initialState = {};
const myFormUserReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowFormUser: {
      state = action.data;
      return state;
    }
    default:
      return state;
  }
};
export default myFormUserReducers;
