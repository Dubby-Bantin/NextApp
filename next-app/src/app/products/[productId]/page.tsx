import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};

const generateMetaData = async ({
  params: { productId },
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${productId}`);
    }, 1);
  });
  return { title: `Product ${title}` };
};
const ProductDetails = ({ params: { productId } }: Props) => {
  return <h1>Details about product {productId}</h1>;
};

export default ProductDetails;
export { generateMetaData };
