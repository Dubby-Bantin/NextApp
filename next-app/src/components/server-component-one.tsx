import fs from "fs";
import ServerComponentTwo from "./server-component-two";
import ClientComponentOne from "./client-component-one";
import { log } from "console";

const ServerComponentOne = () => {
  const file = fs.readFileSync(
    "src/components/server-component-one.tsx",
    "utf-8"
  );
  log("bangin2");
  return (
    <div>
      <h1>Server Component One</h1>
    </div>
  );
};

export default ServerComponentOne;
