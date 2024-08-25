// import { cookies } from "next/headers";

// export const fetchCache = "default-cache";
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

const ProductPage = async () => {
  const res = await fetch("http://localhost:3001/products", {
    next: {
      revalidate: 10,
    },
  });
  const products = await res.json();
  //   const cookieStore = cookies();
  //   cookieStore.get("theme");
  //   const detailsResponse = await fetch("http://localhost:3001/products/1");
  //   const details = await detailsResponse.json();
  return (
    <ul className="space-y-4 p-4">
      {products?.map(({ id, title, description, price }: Product) => (
        <li
          key={id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{title}</h2>
          <p>{description}</p>
          <p className="text-lg font-medium">{price}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductPage;
