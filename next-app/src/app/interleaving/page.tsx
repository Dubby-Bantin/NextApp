import ClientComponentOne from "@/components/client-component-one";
import ServerComponentOne from "@/components/server-component-one";
import { log } from "console";

const InterleavingPage = () => {
  log("bangin");
  return (
    <>
      <h1>InterleavingPage</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
};

export default InterleavingPage;
