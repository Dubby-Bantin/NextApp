"use client";
const erroBoubndary = ({
  error: { message },
  reset,
}: {
  error: Error;
  reset: () => void;
}) => (
  <div>
    {message} <button onClick={reset}>Try again</button>
  </div>
);

export default erroBoubndary;
