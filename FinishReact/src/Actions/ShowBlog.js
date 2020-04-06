import * as Type from "../Constrants/Actions";
import CallApi from "../API/Api";
// Show List Blog
export const getApiListBlog = () => {
  return dispatch => {
    dispatch({
      type: Type.ShowListBlog,
      data: []
    });
    CallApi("Blog_Show", "GET", null)
      .then(res => {
        dispatch({ type: Type.ShowListBlog, data: res.data });
      })
      .catch(err => dispatch({ type: Type.ShowListBlog, data: [] }));
  };
};
export const getApiCategoryBlog = () => {
  return dispatch => {
    dispatch({
      type: Type.ShowCategoryBlog,
      data: []
    });
    CallApi("Category", "GET", null)
      .then(res => {
        dispatch({ type: Type.ShowCategoryBlog, data: res.data });
      })
      .catch(err => dispatch({ type: Type.ShowCategoryBlog, data: [] }));
  };
};
export const getApiSlideBlog = () => {
  return dispatch => {
    dispatch({
      type: Type.ShowSlideBlog,
      data: {}
    });

    CallApi("Slide/?name=Blog", "GET", null)
      .then(res => {
        if (res.data) dispatch({ type: Type.ShowSlideBlog, data: res.data[0] });
        else dispatch({ type: Type.ShowSlideBlog, data: {} });
      })
      .catch(err => dispatch({ type: Type.ShowSlideBlog, data: {} }));
  };
};
