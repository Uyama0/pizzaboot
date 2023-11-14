import React from "react";
import { Provider } from "react-redux";

import store from "../../redux/store/cartStore";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";

function Layout() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div>
          <Routers />
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default Layout;
