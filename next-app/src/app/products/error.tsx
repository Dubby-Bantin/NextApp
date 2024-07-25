"use client";
const errorBoundary = ({
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

export default errorBoundary;
