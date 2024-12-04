import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
  Avatar,
  AvatarGroup,
} from "@mui/joy";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";
import user_data from "@/lib/user";

const ProjectCard = (props: {
  post: any;
  author_id: string;
  title: string;
  summary: string;
}) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const retrieve_user = async () => {
      const { data, error } = await supabase
        .from("UserData")
        .select("*")
        .eq("user_id", props.author_id);

      if (data) setAuthor(data[0]);
      if (error) console.error(error);
    };
    retrieve_user();
  }, [props.author_id]);

  const removePost = async () => {
    const { error } = await supabase
      .from("Posts")
      .delete()
      .eq("id", props.post.id);
    if (!error) window.location.reload();
  };
  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        overflow: "auto",
        resize: "horizontal",
        padding: 2,
        borderRadius: "16px",
        boxShadow: 2,
        backgroundColor: "whitesmoke",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Avatar src={"/leaves.jpeg"} alt={"H"} />
      </Box>
      <CardContent>
        <Typography level="h4" fontWeight="bold">
          {props.title}
        </Typography>
        <Typography level="body-sm" mt={1}>
          {props.summary}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <IconButton variant="outlined" color="neutral">
          <FavoriteBorder />
        </IconButton>
        <Button
          variant="outlined"
          onClick={() => (window.location.href = `/posts/${props.post.id}`)}
          sx={{
            border: "none", // Removes the border
            padding: "6px 12px", // Optional: Adjust padding as needed
          }}
        >
          View
        </Button>
        {props.author_id === user_data?.id && (
          <Button variant="solid" color="danger" onClick={removePost}>
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
