'use client'

import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignUpForm from "@/components/SignUpForm";

const SignupPage: React.FC = () => {
  return (
    <div className="Signup-parent">
      <Navbar />
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      sx={{ height: "100vh" }}
    >
      {/* Left Side: Background Image and Text */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
          color: "white",
          backgroundImage: `url(../leaves.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Shadow overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        {/* Text Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Welcome Back!
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 400 }}>
            Discover the best tools for your tasks and stay connected with your
            team. Log in to continue your journey!
          </Typography>
        </Box>
      </Box>

        {/* Right Side: Signup Form */}
      <Paper
        elevation={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <SignUpForm/>
      </Paper>
        
    </Box> 
    <Footer />
    </div>
  );
};

export default SignupPage;
