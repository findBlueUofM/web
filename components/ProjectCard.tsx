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
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box } from "@mui/material";
import { User } from "@supabase/supabase-js";

const ProjectCard = (props: {
  post: any;
  author_id: string;
  title: string;
  summary: string;
}) => {
  const [author, setAuthor] = useState(null);
  const [user_data, setUserData] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUserData(data.user); // Assign data to user_data state
        console.log("User data:", data.user);
      }
    };

    fetchUser();
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
          <VisibilityIcon />
          {/*ADD IMPLEMENTATION HERE OF WHEN USER CLICKS ON 
          THIS VISIBILITY ICON
          essentially, this will be a feature where you can "watch"
          a post, basically, if they want to revisit a post later
          that seems interesting to them, they can click this icon
          this will also display (right next to the icon)
          the number of people watching this post (need to add another column in the database)
          */}
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
