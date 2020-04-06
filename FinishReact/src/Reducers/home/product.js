import * as Type from "../../Constrants/Actions";
var initialState = [];
const myProductHomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.ShowProductHome:
      return action.data;

    default:
      return [...state];
  }
};
export default myProductHomeReducers;
