"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Error occured in dashboard page</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
