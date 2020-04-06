import React from "react";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/Not Found/404";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import ProductDetails from "./Compoments/Product/ProductDetails";
import CheckOut from "./Pages/Cart/CheckOut";
import BlogDetails from "./Pages/Blog/BlogDetails/BlogDetails";
import User from "./Pages/User/User";
import Login from "./Pages/Login-Logout/Login";
import Admin from "./Pages/Admin/Admin";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/About",
    exact: false,
    main: () => <About />
  },
  {
    path: "/Cart",
    exact: false,
    main: () => <Cart />
  },
  {
    path: "/Blog",
    exact: true,
    main: () => <Blog />
  },
  {
    path: "/Contact",
    exact: false,
    main: () => <Contact />
  },
  {
    path: "/Shop/:id",
    exact: false,
    main: ({ match }) => <Shop match={match} />
  },

  {
    path: "/Product/:id",
    exact: false,
    main: ({ match }) => <ProductDetails match={match} />
  },
  {
    path: "/Checkout",
    exact: false,
    main: () => <CheckOut />
  },
  {
    path: "/Blog/:id",
    exact: false,
    main: ({ match }) => <BlogDetails match={match} />
  },
  {
    path: "/Admin/:name",
    exact: false,
    main: ({ match }) => <Admin match={match} />
  },
  {
    path: "/User/:id",
    exact: false,
    main: ({ match }) => <User match={match} />
  },
  {
    path: "/Login",
    exact: false,
    main: ({ history }) => <Login history={history} />
  },
  {
    path: "*",
    exact: false,
    main: () => <NotFound />
  }
];
export default routes;
