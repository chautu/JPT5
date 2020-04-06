import React from "react";
import Menu from "./Compoments/Menu/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import router from "./router";
import Space from "./Compoments/Space/Space";
import Footer from "./Compoments/Footer/Footer";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Router>
          <Menu />
          {this.showrouter(router)}
          <Space />
          <Footer />
        </Router>
      </>
    );
  }
  // dinh tuyen router
  showrouter(routes) {
    let resfult = null;

    if (routes.length > 0) {
      resfult = routes.map((temp, index) => {
        return (
          <Route
            key={index}
            path={temp.path}
            exact={temp.exact}
            component={temp.main}
          />
        );
      });
    }

    return <Switch>{resfult}</Switch>;
  }
}

export default App;
