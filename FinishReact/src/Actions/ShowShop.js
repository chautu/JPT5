import * as Type from "../Constrants/Actions";
import CallApi from "../API/Api";

//list Category

export const getApiCategoryShop = () => {
  return dispatch => {
    dispatch({
      type: Type.ShowCategoryShop,
      data: []
    });
    CallApi("Category", "GET", null)
      .then(res => {
        dispatch({ type: Type.ShowCategoryShop, data: res.data });
      })
      .catch(err => dispatch({ type: Type.ShowCategoryShop, data: [] }));
  };
};

//List Product

export const getApiProductShop = id => {
  return dispatch => {
    dispatch({
      type: Type.ShowProductShop,
      data: []
    });
    if (id === 0 || id === "0") {
      CallApi("Product", "GET", null)
        .then(res => {
          dispatch({ type: Type.ShowProductShop, data: res.data });
        })
        .catch(err => dispatch({ type: Type.ShowProductShop, data: [] }));
    } else {
      CallApi(`Product/?id_Category=${id}`, "GET", null)
        .then(res => {
          dispatch({ type: Type.ShowProductShop, data: res.data });
        })
        .catch(err => dispatch({ type: Type.ShowProductShop, data: [] }));
    }
  };
};
export const getApiSlideShop = () => {
  return dispatch => {
    dispatch({
      type: Type.ShowSlideShop,
      data: {}
    });

    CallApi("Slide/?name=Shop", "GET", null)
      .then(res => {
        if (res.data) dispatch({ type: Type.ShowSlideShop, data: res.data[0] });
        else dispatch({ type: Type.ShowSlideShop, data: {} });
      })
      .catch(err => dispatch({ type: Type.ShowSlideShop, data: {} }));
  };
};
