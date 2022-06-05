import React from "react";

import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
