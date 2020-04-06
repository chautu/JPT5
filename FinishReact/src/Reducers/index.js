import { combineReducers } from "redux";
import myListBlogReducers from "./blog/blog";
import myContentReducer from "./blogDetails/Content";
import myCommentReducer from "./blogDetails/comment";
import myAuthorBlogReducer from "./blogDetails/author";
import myCategoryBlogReducer from "./blog/category";
import myCategoryShopReducers from "./shop/category";
import myProductShopReducers from "./shop/product";
import myProductDetailsReducers from "./ProductDetails/ProductDetails";
import mySlideHomeReducers from "./home/slide";
import myCategoryHomeReducers from "./home/category";
import myProductHomeReducers from "./home/product";
import myCommentSlideHomeReducers from "./home/commentslide";
import mySlideShopReducers from "./shop/slide";
import mySlideBlogReducers from "./blog/slide";
import myFormUserReducers from "./User/formUser";
import myLoginReducers from "./Login/login";
import myMenuInFormReducers from "./Menu/MenuInFormUser";
import mySildeCartReducers from "./Bill/Slide";
import myUserCartReducers from "./Bill/User";
import myProductCartReducers from "./Bill/product";
import myListUserReducers from "./Admin/ListUser";
const allReducers = combineReducers({
  //Home

  mySlideHome: mySlideHomeReducers,
  myCategoryHome: myCategoryHomeReducers,
  myProductHome: myProductHomeReducers,
  myCommentSildeHome: myCommentSlideHomeReducers,

  //Shop

  mySlideShop: mySlideShopReducers,
  myCategoryShop: myCategoryShopReducers,
  myProductShop: myProductShopReducers,

  //Produdct -Details

  myProductDetails: myProductDetailsReducers,

  //Blog
  mySlideBlog: mySlideBlogReducers,
  myListBlog: myListBlogReducers,
  myCategoryBlog: myCategoryBlogReducer,

  //Blog Details

  myContentBlogDetails: myContentReducer,
  myCommentBlogDetails: myCommentReducer,
  myAuthorBlogDetails: myAuthorBlogReducer,

  //User
  myFormUser: myFormUserReducers,

  //Login

  myLogin: myLoginReducers,

  //Menu
  myMenuInformUser: myMenuInFormReducers,

  //Bill
  mySlideCart: mySildeCartReducers,
  myUserCart: myUserCartReducers,
  myProductCart: myProductCartReducers,
  //Admin
  myShowListUser: myListUserReducers
});
export default allReducers;
