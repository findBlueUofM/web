"use client";

import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Settings() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const session = await supabase.auth.getUser();
      setUser(session.data?.user);

      // Redirect if no user is authenticated
      if (!session.data?.user) {
        router.push("/login");
      }
    };

    fetchUser();
  }, [router]);

  if (!user) {
    // Render nothing while redirecting
    return null;
  }

  return (
    <div>
      <Navbar />
      <div>Settings</div>
      <Footer />
    </div>
  );
}
