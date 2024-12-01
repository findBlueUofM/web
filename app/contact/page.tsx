"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

import BioCard from "@/components/TeamInfo";
import Box from "@mui/joy/Box";

import styles from "./about.module.css";
export default function About() {
  const router = useRouter();
  const handleContactClick = () => {
    router.push("/contact");
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2, // space between cards
          p: 2, // padding around the container
        }}
      >
        <BioCard
          profilepic={"../images/michlogo.png"}
          name="Pravesh Kunwar"
          desc="Hi, I'm Pravesh Kunwar, and I love to code!"
          title="DEV"
        ></BioCard>
        <BioCard
          profilepic={"/Team Photos/OwenLennon.jpeg"}
          name="Owen Lennon"
          desc="Hi, I'm Owen Lennon, and I love to code!"
          title="DEV"
        ></BioCard>
        <BioCard
          profilepic={"../images/michlogo.png"}
          name="Ali Mothana"
          desc="Hi, I'm Ali Mothana, and I love to code!"
          title="DEV"
        ></BioCard>
        <BioCard
          profilepic={"../images/michlogo.png"}
          name="David Nguyen"
          desc="Hi, I'm David Nguyen, and I love to code!"
          title="DEV"
        ></BioCard>
        <BioCard
          profilepic={"../images/michlogo.png"}
          name="Connor Woods"
          desc="Hi, I'm Connor Woods, and I love to code!"
          title="DEV"
        ></BioCard>
        <BioCard
          profilepic={"../images/michlogo.png"}
          name="James Andersen"
          desc="Hi, I'm James Andersen, and I love to code!"
          title="DEV"
        ></BioCard>
        <BioCard
          profilepic={"../images/michlogo.png"}
          name="Samuel Konigbagbe"
          desc="Hi, I'm Samuel Konigbagbe, and I love to code!"
          title="DEV"
        ></BioCard>
        <BioCard
          profilepic={"../images/michlogo.png"}
          name="Shaurya Baruah"
          desc="Hi, I'm Shaurya Baruah, and I love to code!"
          title="DEV"
        ></BioCard>
        <BioCard
          profilepic={"images/michlogo.png"}
          name="Vishnu Parthiban"
          desc="Hi, I'm Vishnu Parthiban, and I love to code!"
          title="DEV"
        ></BioCard>
      </Box>
      <Footer />
    </div>
  );
}
