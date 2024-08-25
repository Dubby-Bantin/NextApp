import Product from "@/components/product";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

const ProductDetailsPage = () => {
  return (
    <div>
      <h1>Product Detail Page</h1>

      <Suspense
        fallback={
          <div className="h-10 w-10 rounded-full border border-1 border-dotted border-black bg-transparent animate-spin"></div>
        }
      >
        <Product />
        <Reviews />
      </Suspense>
    </div>
  );
};

export default ProductDetailsPage;
