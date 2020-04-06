import * as Type from "../Constrants/Actions";
import CallApi from "../API/Api";
// Show List Blog
export const GetApiUser = () => {
  return dispatch => {
    dispatch({
      type: Type.ShowListUser,
      data: []
    });
    CallApi("Account", "GET", null)
      .then(res => {
        console.log(res.data);
        if (res.data.length > 0)
          dispatch({
            type: Type.ShowListUser,
            data: res.data
          });
        else
          dispatch({
            type: Type.ShowListUser,
            data: []
          });
      })
      .catch(err =>
        dispatch({
          type: Type.ShowListUser,
          data: []
        })
      );
  };
};
export const PostApiUserAccount = obj => {
  return dispatch => {
    const account = {
      id: obj.id,
      email: obj.email,
      password: obj.password
    };

    CallApi("Account", "POST", account)
      .then()
      .catch();
  };
};
export const PostApiInformationUserAccount = obj => {
  return dispatch => {
    const informUser = {
      id: obj.id,
      name: obj.name,
      image: "",
      id_user: obj.id,
      telephone: "",
      gender: true,
      address: "",
      accountPaypal: "",
      job: "",
      email: obj.email
    };

    CallApi("Information_User", "POST", informUser)
      .then(res => {
        window.location.assign(window.location.href);
      })
      .catch();
  };
};
export const DelUser = id => {
  return dispatch => {
    CallApi(`Account/${id}`, "DELETE", null)
      .then(res => {
        window.location.assign(window.location.href);
      })
      .catch();
  };
};

// Add Product

export const PostProduct = obj => {
  return dispatch => {
    CallApi("Product", "POST", obj)
      .then(res => {
        window.location.assign(window.location.href);
      })
      .catch();
  };
};

// Delete Product

export const DelProduct = id => {
  return dispatch => {
    CallApi(`Product/${id}`, "DELETE", null)
      .then(res => {
        window.location.assign(window.location.href);
      })
      .catch();
  };
};
