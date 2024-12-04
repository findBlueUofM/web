/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { use } from "react"; // Import use
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface PostQuery {
  id: string;
}

export default function UniquePosts({ params }: { params: { id: string } }) {
  // @ts-expect-error
  const resolvedParams: PostQuery = use(params); // Unwrap the promise

  return (
    <div className="uniquePost">
      <Navbar />
      <p>Post: {resolvedParams.id}</p>
      <Footer />
    </div>
  );
}
