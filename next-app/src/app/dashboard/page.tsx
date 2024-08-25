"use client";
import { useEffect, useState } from "react";

const DashBoard = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Dashboard Component");
  }, []);
  return (
    <div>
      <h1>DashBoard Page</h1>
      <div className="w-[300px]" aria-label="input-password-toggle">
        <div className="relative w-full">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="input your name"
            className="w-full p-4 pr-12 transition-all bg-transparent border rounded-lg outline-none border-slate-200 focus:border-blue-500"
          />
          <span className="absolute cursor-pointer text-slate-400 right-4 top-2/4 -translate-y-2/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>
      <p>Hello {name}</p>
    </div>
  );
};

export default DashBoard;
