import * as Type from "../Constrants/Actions";
import CallApi from "../API/Api";
export const getApiInformUser = id => {
  return dispatch => {
    dispatch({
      type: Type.MenuInformUser,
      data: {}
    });
    CallApi(`Information_User/?id_user=${id}`, "GET", null)
      .then(res => {
        if (res.data.length > 0) {
          dispatch({
            type: Type.MenuInformUser,
            data: res.data[0]
          });
        }
        dispatch({ type: Type.MenuInformUser, data: {} });
      })
      .catch(err => dispatch({ type: Type.MenuInformUser, data: {} }));
  };
};
