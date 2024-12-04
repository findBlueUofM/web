"use client";

import AddPostForm from "@/components/AddPostForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SubmitPost() {
  return (
    <div className="project-submit-form">
      <Navbar />
      <div className="form">
        <AddPostForm />;
      </div>
      <Footer />
    </div>
  );
}
