"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PeopleIcon from "@mui/icons-material/People";
import { supabase } from "@/lib/supabase";
import NetworkBuildRepeatSection from "@/components/MainShowcase";
import { Box, CircularProgress } from "@mui/material";
import ProjectCardList from "@/components/ProjectCardList";
import AddPostForm from "@/components/AddPostForm";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state
  const router = useRouter();

  useEffect(() => {
    // Show loading screen for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Fetch the authenticated user
    const fetchUser = async () => {
      const session = await supabase.auth.getUser();
      setUser(session.data?.user);
    };

    fetchUser();

    // Cleanup timeout
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          setUser(session?.user);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
          router.push("/"); // Redirect to the main page after sign-out
        }
      }
    );

    // Cleanup listener
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  // if (user) {
  //   return (
  //     <div>
  //       <Navbar />
  //       <Box sx={{ display: "flex" }}>
  //         <ProjectCardList />
  //         <AddPostForm />
  //       </Box>
  //       <Footer />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Navbar />
      {/* First Section: Large Image + title */}
      <div id="title">
        <div className="title-content">
          <h1 id="title-main">FindBlue</h1>
          <h3 id="title-quote">Connect. Build. Showcase.</h3>
        </div>
      </div>
      {/* Second Section: Quote Section */}
      <section className="quote-section">
        <blockquote>
          Made for students, by students, FindBlue is the go-to space for
          students at the University of Michigan to launch ideas and build
          ventures. We provide a platform for motivated, and driven students to
          find other students looking to make a difference.
        </blockquote>
      </section>
      {/* Third Section: Title and Image Buttons */}
      <section className="image-buttons-section">
        {/* Centered title above the image buttons */}
        <div className="section-title">
          <h2>
            Network. Build. Repeat.
            <PeopleIcon className="people-icon" fontSize="large" />
          </h2>
        </div>
        <NetworkBuildRepeatSection />
      </section>
      {/* Fourth Section: Create your profile */}
      <section className="profile-section">
        <div className="content-left">
          <h1 className="section-title-large">Create Your Profile</h1>
          <p className="section-subtext">
            Join us today and start exploring the endless possibilities.
          </p>
          <button className="profile-button">Make Your Profile</button>
        </div>
        <div className="content-right">
          <img
            src="laptophalf.png"
            alt="Profile Graphic"
            className="profile-image"
          />
        </div>
      </section>
      {/* Fifth Section: 3 steps */}
      <section className="step-by-step-section">
        <div className="section-title">
          <h2>With You Every Step of the Way</h2>
        </div>
        <div className="steps-container">
          <div className="step start">
            <img
              src="project2_fixed.png"
              alt="Start Icon"
              className="step-icon2"
            />
            <h3>Create your project</h3>
            <p>
              Got the next best idea in business? Get access to everything you
              need to take on the world with your StartUp
            </p>
            <a href="/login" className="learn-more">
              Learn More
            </a>
          </div>
          <div className="step grow">
            <img
              src="proposal_fixed.png"
              alt="Start Icon"
              className="step-icon"
            />
            <h3>Make your proposal</h3>
            <p>
              Ready to grow your market? Get exclusive access to professionals
              and leaders to get you there!
            </p>
            <a href="/login" className="learn-more">
              Learn More
            </a>
          </div>
          <div className="step fund">
            <img src="hands_fixed.png" alt="Start Icon" className="step-icon" />
            <h3>Find your team</h3>
            <p>
              Is your business seeking capital? Access an exclusive network of
              investors and prepare your business to get Funded!
            </p>
            <a href="/login" className="learn-more">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
