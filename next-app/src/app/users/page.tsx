import { log } from "console";
import React from "react";

type User = {
  name: string;
  id: string;
  username: string;
  email: string;
  phone: string;
};
const UsersPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  log(users);
  return (
    <div className="grid grid-cols-2 gap-2 min-h-screen">
      {users?.map(({ name, id, username, email, phone }: User) => (
        <div
          key={id}
          className="flex items-center border-r border-b justify-between p-4 bg-white  text-black"
        >
          <div className="flex flex-col space-y-1">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm">{username}</p>
          </div>
          <div className="flex flex-col text-md space-y-1 items-end">
            <div>{email}</div>
            <div>{phone}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
