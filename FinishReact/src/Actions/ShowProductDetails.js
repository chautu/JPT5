import * as Type from "./../Constrants/Actions";
import CallApi from "./../API/Api";
export const getApiProductDetails = id => {
  return dispatch => {
    dispatch({
      type: Type.ShowProductDetails
    });

    CallApi(`Product/${id}`, "GET", null)
      .then(res => {
        dispatch({ type: Type.ShowProductDetails, data: res.data });
      })
      .catch(err => dispatch({ type: Type.ShowProductDetails, data: [] }));
  };
};
