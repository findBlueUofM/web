import ProjectCard from "./ProjectCard";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type PostType = {
  title: string;
  summary: string;
  author_id: string;
};

export default function ProjectCardList() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!posts.length) return <Typography>No posts available.</Typography>;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
        padding: 2,
      }}
    >
      {posts.map((post, i) => (
        <ProjectCard
          key={`Post_${i}`}
          title={post.title}
          summary={post.summary}
          author_id={post.author_id}
          post={post}
        />
      ))}
    </Box>
  );
}
