/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { use, useState, useEffect } from "react"; // Using `use` to unwrap params
import { supabase } from "@/lib/supabase";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface Post {
  id: string;
  title: string;
  content: string;
  // Add other properties as per your Posts table
}

export default function UniquePosts({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params); // Unwrap the Promise with `use`
  const [post, setPost] = useState<Post | null>(null); // Explicit type for post
  const { id } = unwrappedParams;

  useEffect(() => {
    if (!id) {
      console.error("Post ID is missing");
      return;
    }

    const retrievePost = async () => {
      try {
        const { data, error } = await supabase
          .from("Posts")
          .select("*")
          .eq("id", id)
          .single(); // Fetch a single post by ID

        if (error) {
          console.error("Error fetching post:", error);
        } else {
          setPost(data);
        }
      } catch (error) {
        console.error("Unexpected error fetching post:", error);
      }
    };

    retrievePost();
  }, [id]);

  if (!post) {
    return (
      <div className="uniquePost">
        <Navbar />
        <p>Loading...</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="uniquePost">
      <Navbar />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Footer />
    </div>
  );
}
