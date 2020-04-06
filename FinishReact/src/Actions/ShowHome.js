import * as Type from "./../Constrants/Actions";
import CallApi from "./../API/Api";

export const getApiSlideHome = () => {
  return dispatch => {
    dispatch({
      type: Type.ShowSlideHome,
      data: {}
    });

    CallApi("Slide/?name=Home", "GET", null)
      .then(res => {
        if (res.data) dispatch({ type: Type.ShowSlideHome, data: res.data[0] });
        else dispatch({ type: Type.ShowSlideHome, data: {} });
      })
      .catch(err => dispatch({ type: Type.ShowSlideHome, data: {} }));
  };
};
export const getApiCategoryHome = () => {
  return dispatch => {
    dispatch({
      type: Type.ShowCategoryHome,
      data: []
    });

    CallApi("Category/?HomeFlg=true", "GET", null)
      .then(res => {
        if (res.data) dispatch({ type: Type.ShowCategoryHome, data: res.data });
        else dispatch({ type: Type.ShowCategoryHome, data: [] });
      })
      .catch(err => dispatch({ type: Type.ShowCategoryHome, data: [] }));
  };
};
export const getApiProductHome = () => {
  return dispatch => {
    dispatch({
      type: Type.ShowProductHome,
      data: []
    });

    CallApi("Product/?HomeFlg=true", "GET", null)
      .then(res => {
        if (res.data) dispatch({ type: Type.ShowProductHome, data: res.data });
        else dispatch({ type: Type.ShowProductHome, data: [] });
      })
      .catch(err => dispatch({ type: Type.ShowProductHome, data: [] }));
  };
};
export const getApiCommentSlideHome = () => {
  return dispatch => {
    dispatch({
      type: Type.ShowCommentSlideHome,
      data: []
    });

    CallApi("Comment_Slide/?HomeFlg=true", "GET", null)
      .then(res => {
        if (res.data)
          dispatch({ type: Type.ShowCommentSlideHome, data: res.data });
        else dispatch({ type: Type.ShowCommentSlideHome, data: [] });
      })
      .catch(err => dispatch({ type: Type.ShowCommentSlideHome, data: [] }));
  };
};
