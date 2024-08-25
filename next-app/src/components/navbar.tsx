import { log } from "console";
import React, { useState } from "react";
import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

const Navbar = () => {
  console.log("nav_bar rendered");
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};

export default Navbar;
