import * as Type from "../Constrants/Actions";
import CallApi from "../API/Api";

//Show form

export const getApiFormUser = id => {
  return dispatch => {
    dispatch({
      type: Type.ShowFormUser,
      data: {}
    });
    CallApi(`Information_User/${id}`, "GET", null)
      .then(res => {
        dispatch({
          type: Type.ShowFormUser,
          data: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: Type.ShowFormUser,
          data: {}
        });
      });
  };
};
