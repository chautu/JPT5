import * as Type from "../Constrants/Actions";
import CallApi from "../API/Api";
export const getApiLogin = login => {
  return dispatch => {
    dispatch({
      type: Type.Login,
      data: {}
    });
    CallApi(
      `Account/?email=${login.email}&&password=${login.password}`,
      "GET",
      null
    )
      .then(res => {
        if (res.data.length > 0) {
          let temp = { data: res.data[0], isLogin: true };
          window.localStorage.setItem("Login", JSON.stringify(temp));
          dispatch({
            type: Type.Login,
            data: { data: res.data[0], isLogin: true }
          });
        }
        dispatch({ type: Type.Login, data: {} });
      })
      .catch(err => dispatch({ type: Type.Login, data: {} }));
  };
};
