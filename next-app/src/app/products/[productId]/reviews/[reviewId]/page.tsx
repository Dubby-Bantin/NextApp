"use client";

import { notFound } from "next/navigation";
type ReviewProps = {
  params: { productId: string; reviewId: string };
};
// const getRandomInt = (count: number) => {
//   return Math.floor(Math.random() * count);
// };
const ReviewDetails = ({ params: { productId, reviewId } }: ReviewProps) => {
  // const random = getRandomInt(2);
  // if (random == 1) {
  //   throw new Error("Error loading review");
  // }
  Number(reviewId) > 1000 && notFound();
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
};

export default ReviewDetails;
