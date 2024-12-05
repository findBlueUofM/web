"use client";

import AddPostForm from "@/components/AddPostForm";
import Navbar from "@/components/Navbar";

export default function SubmitPost() {
  return (
    <div className="project-submit-form">
      <Navbar />
      <div className="form">
        <AddPostForm />;
      </div>
    </div>
  );
}
