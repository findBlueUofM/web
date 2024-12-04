"use client";
import Navbar from "../../components/Navbar";
import Box from "@mui/material/Box";
import ProjectCardList from "../../components/ProjectCardList";
import AddPostForm from "../../components/AddPostForm";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import ForumIcon from "@mui/icons-material/Forum";

import styles from "./proj.module.css";
import CreateButton from "@/components/CreateButton";

export default function Projects() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  return (
    <div className="projects-page">
      <Navbar />
      <div className={styles["proj-header-title"]}>
        <h2>
          Post Listings <ForumIcon fontSize="large" htmlColor="#00274C" />
        </h2>
        <h6>
          <b>Jump into the latest posts below!</b>
        </h6>
        <CreateButton />
      </div>
      <Box sx={{ display: "flex" }}>
        <ProjectCardList />
      </Box>
      <Footer />
    </div>
  );
}
