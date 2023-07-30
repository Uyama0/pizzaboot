import React from "react";

import Header from "../Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";

function Layout() {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
