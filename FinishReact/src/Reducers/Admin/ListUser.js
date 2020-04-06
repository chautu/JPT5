import * as Type from "../../Constrants/Actions";
var initialState = [];
const myListUserReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowListUser: {
      state = action.data;
      return state;
    }
    default:
      return state;
  }
};
export default myListUserReducers;
