/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { use, useState, useEffect } from "react"; // Import use
import { supabase } from "@/lib/supabase";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

interface PostQuery {
  id: string;
}

// export const getStaticProps = (async (context) => {
//   const { data, error } = await supabase
//         .from("Posts")
//         .select("*")
//           .eq("id", id);
//   return { props: { data } }
// }) satisfies GetStaticProps<{
//   repo: Repo
// }>

export default function UniquePosts(props) {
  const router = useRouter();
  // const resolvedParams: PostQuery = use(params); // Unwrap the promise
  const [post, setPost] = useState({}); //post is a json with the data from supabase
  const { id } = router.query;
  useEffect(() => {
    const retrievePost = async () => {
      const { data, error } = await supabase
        .from("Posts")
        .select("*")
          .eq("id", id);
        
        if (error) {
            
        } else {
            // console.log(data);
            setPost(data);
        }
    };
      retrievePost();
  }, []);

  return (
    <div className="uniquePost">
      <Navbar />
      <p>Post: {id}</p>
      <Footer />
    </div>
  );
}
