'use client';

import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
