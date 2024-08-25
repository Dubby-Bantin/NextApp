"use client";
import { log } from "console";
import React, { useState } from "react";

const NavSearch = () => {
  const [search, setSearch] = useState<string>("");

  console.log("nav-search rendered");
  return <div>NavSearch</div>;
};

export default NavSearch;
