"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";
const ClientRoutePage = () => {
  const {
    colors: { primary, secondary },
  } = useTheme();
  const result: string = clientSideFunction();

  return (
    <h1 className={`dark:text-[${primary}] text-[${secondary}]`}>
      Client route {result}
    </h1>
  );
};

export default ClientRoutePage;
