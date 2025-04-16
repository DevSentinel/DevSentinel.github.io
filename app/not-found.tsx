"use client";

import React, { Suspense } from "react";
import Link from "next/link";

// Optional: a simple loading fallback
function Loading() {
  return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>;
}

function NotFoundContent() {
  // If you use useSearchParams or other client hooks, put them here
  // Example:
  // const params = useSearchParams();
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[60vh] py-10">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-100 tracking-tight drop-shadow-lg mb-2 text-center">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-400 mt-4 text-center max-w-xl">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="mt-8 btn btn-primary px-6 py-3 rounded-md text-lg shadow hover:shadow-lg transition-all duration-300">
        Go Home
      </Link>
    </main>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<Loading />}>
      <NotFoundContent />
    </Suspense>
  );
}
