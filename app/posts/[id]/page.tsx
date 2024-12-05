"use client";

import React, { useEffect, useState, use } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";


interface Socials {
  email: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
}

interface PostData {
  author_id: string;
  id: number;
  text: string;
  title: string;
  date: string;
  user_name: string;
  description: string;
  avatar_url: string;
  socials: Socials;
}


export default function UniquePosts({ params }: { params: Promise<{id: string}> }) {
  const [post, setPost] = useState<PostData[]>([]);

  // Unwrap the `params` promise using `React.use()`
  const resolvedParams = use(params);

  useEffect(() => {
    const retrievePost = async () => {
      const { data, error } = await supabase
        .from("Posts")
        .select("*")
        .eq("id", resolvedParams.id);

      if (error) {
        console.error(error);
      } else if (data) {
        setPost(data);
      }
    };
    retrievePost();
  }, [resolvedParams.id]);


  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          padding: "20px",
        }}
      >
        {post.map((p) => (
          <Card
            key={p.id}
            sx={{
              maxWidth: "800px", // Max width to prevent excessive stretching
              boxShadow: "lg",
              borderRadius: "20px",
              padding: "20px", // Ensure spacing inside the card
              display: "flex",
              flexDirection: "column", // Ensure the content stacks neatly
              gap: "1rem", // Add space between elements
            }}
          >
            <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
              <Avatar src={p.avatar_url} sx={{ "--Avatar-size": "4rem" }} />
              <Typography level="title-lg">{p.user_name}</Typography>
              <Typography level="body-sm" sx={{ color: "gray", mt: 1 }}>
                <b>Posted:</b> {p.date}
              </Typography>
              <Typography level="body-sm" sx={{ color: "gray", mt: 1 }}>
                <b>Description:</b> {p.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 2,
                  "& > button": { borderRadius: "2rem" },
                }}
              >
              {p.socials.linkedin != "" ? <IconButton size="sm" variant="plain" color="neutral">
                  <LinkedInIcon />
                </IconButton> : <></>}
                {p.socials.instagram != "" ? <IconButton size="sm" variant="plain" color="neutral">
                  <InstagramIcon />
                </IconButton> : <></>}
                {p.socials.github != "" ? <IconButton size="sm" variant="plain" color="neutral">
                  <GitHubIcon />
                </IconButton> : <></>}
                <IconButton size="sm" variant="plain" color="neutral">
                  <EmailIcon />
                </IconButton>
              </Box>
            </CardContent>
            <CardOverflow sx={{ bgcolor: "background.level1" }}>
              <CardActions buttonFlex="1">
                <ButtonGroup
                  variant="outlined"
                  sx={{ bgcolor: "background.surface" }}
                >
                  <Button>Save for later</Button>
                </ButtonGroup>
              </CardActions>
            </CardOverflow>
          </Card>
        ))}
      </div>
    </div>
  );
}
