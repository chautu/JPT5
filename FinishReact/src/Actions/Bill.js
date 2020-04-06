import * as Type from "./../Constrants/Actions";
import CallApi from "./../API/Api";

// get slide
export const getApiSlideCart = () => {
  return dispatch => {
    dispatch({
      type: Type.ShowSlideCart,
      data: {}
    });

    CallApi("Slide/?name=Cart", "GET", null)
      .then(res => {
        if (res.data.length > 0)
          dispatch({ type: Type.ShowSlideCart, data: res.data[0] });
        else dispatch({ type: Type.ShowSlideHome, data: {} });
      })
      .catch(err => dispatch({ type: Type.ShowSlideCart, data: {} }));
  };
};

// get id product
export const getApiUserCart = id => {
  return dispatch => {
    dispatch({
      type: Type.UserCart,
      data: []
    });

    CallApi(`Cart/?id_user=${id}`, "GET", null)
      .then(res => {
        if (res.data.length > 0)
          dispatch({ type: Type.UserCart, data: res.data });
        else dispatch({ type: Type.UserCart, data: [] });
      })
      .catch(err => dispatch({ type: Type.UserCart, data: [] }));
  };
};

//get product
export const getApiProductCart = id => {
  return dispatch => {
    dispatch({
      type: Type.ShowProductCart,
      data: []
    });
    console.log(id);
    CallApi(`Product/?${id}`, "GET", null)
      .then(res => {
        dispatch({ type: Type.ShowProductCart, data: res.data });
      })
      .catch(err => dispatch({ type: Type.ShowProductCart, data: [] }));
  };
};
