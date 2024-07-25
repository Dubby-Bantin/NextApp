"use client";

import Link from "next/link";
import { navLinks } from "../_lib/navLinks";
import { usePathname } from "next/navigation";
import { useState } from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map(({ name, href }) => {
        return (
          <Link
            className={
              href == pathname ? "font-bold mr-4" : "text-blue-500 mr-4"
            }
            key={href}
            href={href}
          >
            {name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default RootLayout;
