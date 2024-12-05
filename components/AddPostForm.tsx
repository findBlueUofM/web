import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { TextField, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { Interface } from "readline";

interface Socials {
  email: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
}

const LINKEDIN_REGEX = "^https:\\/\\/[a-z]{2,3}\\.linkedin\\.com\\/.*$"
const GITHUB_REGEX = "^https?://github\.com/([a-zA-Z0-9._-]+)$";
const INSTAGRAM_REGEX = "^https:\\/\\/www\\.instagram\\.com\\/.*$";


export default function AddPostForm() {
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
  }, []);

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form_data = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries((form_data as any).entries()); // Convert to object
    if (
      !formValues.user_name ||
      !formValues.title ||
      !formValues.summary ||
      !formValues.description ||
      !formValues.email
    ) {
      alert("Please fill out all required fields.");
      return;
    } else {
    const socials: Socials = {
      email: formValues.email,
      github: formValues.github,
      linkedin: formValues.linkedin,
      instagram: formValues.instagram 
    }
    const githubValid = formValues.github
    ? new RegExp(GITHUB_REGEX).test(formValues.github as string)
    : true;
  const linkedinValid = formValues.linkedin
    ? new RegExp(LINKEDIN_REGEX).test(formValues.linkedin as string)
    : true;
  const instagramValid = formValues.instagram
    ? new RegExp(INSTAGRAM_REGEX).test(formValues.instagram as string)
    : true;

  if (!githubValid) {
    alert("Invalid GitHub URL. Please provide a valid GitHub profile link.");
    return;
  }
  if (!linkedinValid) {
    alert("Invalid LinkedIn URL. Please provide a valid LinkedIn profile link.");
    return;
  }
  if (!instagramValid) {
    alert("Invalid Instagram URL. Please provide a valid Instagram profile link.");
    return;
  }
    const { data, error } = await supabase
      .from("Posts")
      .insert([
        {
          title: formValues.title,
          summary: formValues.summary,
          author_id: user_data!.id,
          description: formValues.description,
          date: new Date().toLocaleDateString("en-CA"),
          user_name: formValues.user_name,
          socials
        },
      ])
      .select();
    router.push("/projects");
    }
  };
  if (!isClient) return null;
  return (
    <div>
      {user_data ? (
        <div className="flex-col justify-items-center">
          <h1>
            <b>Add Post</b>
          </h1>

          <form onSubmit={handleSubmit}>
            <Box className="my-2">
              {" "}
              <TextField
                label="Name"
                name="user_name"
                required
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Title"
                name="title"
                required
                variant="outlined"
                fullWidth
              />
            </Box>
            <TextField
              label="Summary"
              name="summary"
              required
              variant="outlined"
              fullWidth
              multiline
            />
            <TextField
              label="Description"
              name="description"
              required
              variant="outlined"
              fullWidth
              multiline
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              required
              variant="outlined"
              fullWidth
              multiline
            />
            <TextField
              label="GitHub"
              name="github"
              variant="outlined"
              fullWidth
              multiline
            />
            <TextField
              label="LinkedIn"
              name="linkedin"
              variant="outlined"
              fullWidth
              multiline
            />
            <TextField
              label="Instagram"
              name="instagram"              
              variant="outlined"
              fullWidth
              multiline
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mb-10"
            >
              Submit
            </Button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
