'use client'

import React from "react";
import {
  Box,
  Typography,
  Paper,
} from "@mui/material";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LogInForm";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/login/signup');
  }
  return (
    <div className="login-parent">
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
          backgroundImage: `url(careerfairedited.jpg)`,
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
          <Typography variant="h3" gutterBottom sx={{fontFamily: 'Inter', fontWeight: 750}}>
            Welcome Back!
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 400, fontFamily: 'Inter', fontWeight: 500}}>
            Why wait? Opportunities and networks are waiting for you at the door! Log in now to continue.
          </Typography>
        </Box>
      </Box>

      {/* Right Side: Login Form */}
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
       <LoginForm />
      </Paper>
    </Box>
    </div>
  );
};

export default LoginPage;
