"use client";
import { useState } from "react";

const ClientComponentTwo = () => {
  const [name, setName] = useState<string>("Batman");
  return <div>Client Component Two</div>;
};

export default ClientComponentTwo;
