import * as Type from "../Constrants/Actions";
import CallApi from "../API/Api";

//Show Content Blog

export const getApiBlogDetails = id => {
  return dispatch => {
    dispatch({
      type: Type.ShowContentBlogDetails
    });

    CallApi(`Blog_Details/${id}`, "GET", null)
      .then(res => {
        dispatch({
          type: Type.ShowContentBlogDetails,
          data: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: Type.ShowContentBlogDetails,
          data: {}
        });
      });
  };
};

//Show Comment Blog

export const getApiCommentBlog = id => {
  return dispatch => {
    dispatch({
      type: Type.ShowCommentBlogDetails,
      data: []
    });

    CallApi(`Comment_Blog/?id_blogDetails=${id}`, "GET", null)
      .then(res => {
        dispatch({
          type: Type.ShowCommentBlogDetails,
          data: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: Type.ShowCommentBlogDetails,
          data: []
        });
      });
  };
};

//Show Author
export const getApiAuthor = id => {
  return dispatch => {
    dispatch({
      type: Type.ShowAuthorBlogDetails,
      data: []
    });

    CallApi(`author/?id_blogDetails=${id}`, "GET", null)
      .then(res => {
        dispatch({
          type: Type.ShowAuthorBlogDetails,
          data: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: Type.ShowAuthorBlogDetails,
          data: []
        });
      });
  };
};
