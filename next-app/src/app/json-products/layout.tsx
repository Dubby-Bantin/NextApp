import { log } from "console";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const productsResponse = await fetch("http://localhost:3001/products");
  const products = await productsResponse.json();
  log(products);
  return (
    <div>
      <h1>bantin</h1>
      {children}
    </div>
  );
};

export default Layout;
