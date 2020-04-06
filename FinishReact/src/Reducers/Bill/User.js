import * as Type from "../../Constrants/Actions";
var initialState = [];
const myUserCartReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.UserCart: {
      return action.data;
    }
    default:
      return state;
  }
};
export default myUserCartReducers;
