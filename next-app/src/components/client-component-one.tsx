"use client";
import { useState } from "react";
import ClientComponentTwo from "./client-component-two";
import ServerComponentOne from "./server-component-one";

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState<string>("Batman");
  return (
    <>
      <h1>Client Component One</h1>
      {children}
    </>
  );
};

export default ClientComponentOne;
