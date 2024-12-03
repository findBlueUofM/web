import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import user_data from "@/lib/user";
import { Box, CircularProgress } from "@mui/material";
import loadConfig from "next/dist/server/config";

export default function ProjectCardList() {
  type PostType = {
    title: string;
    text: string;
    author_id: string | number;
  };

  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setLoading] = useState(true);
  // const [user_data, setUserData] = useState(null);
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
        console.log("Posts:", data);
      });
  }, []);

  if (!posts) return <p>No post data</p>;
  if (!user_data) {
    return <p>No User!</p>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {posts.map((post, i) => (
        <div key={"Post_" + i} className="mb-5 ms-2">
          <ProjectCard
            title={post.title}
            text={post.text}
            author_id={post.author_id}
            post={post}
          />
        </div>
      ))}
    </Box>
  );
}
