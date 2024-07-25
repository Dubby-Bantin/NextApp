"use client";
const erroBoubndary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => (
  <div>
    {error.message} <button onClick={reset}>Try again</button>
  </div>
);

export default erroBoubndary;
