import ImageSlider from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";

const ServerRoutePage = () => {
  console.log("server route rendered");

  const result = serverSideFunction();

  return (
    <>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
};

export default ServerRoutePage;
