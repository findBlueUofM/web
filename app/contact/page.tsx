"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import BioCard from "@/components/TeamInfo";
import Box from "@mui/joy/Box";
import HandshakeIcon from "@mui/icons-material/Handshake";
import styles from "./contact.module.css";
export default function About() {
  const router = useRouter();
  const handleContactClick = () => {
    router.push("/contact");
  };
  return (
    <div className="contact-page">
      <Navbar />
      <div className={styles["contact-header"]}>
        <h1 id="contact-team">
          Meet The Team! <HandshakeIcon fontSize="inherit" />
        </h1>
        <h4>
          A team of aspiring developers, working to make a fundamental
          difference in the way students and professors can connect.
        </h4>
      </div>
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
          profilepic={"/Team Photos/praveshk.png"}
          name="Pravesh Kunwar"
          desc="Hi, I'm Pravesh Kunwar, and I love to code!"
          title="DEV"
          linkedin="https://www.linkedin.com/in/praveshkunwar/"
        ></BioCard>
        <BioCard
          profilepic={"/Team Photos/OwenLennon.jpeg"}
          name="Owen Lennon"
          desc="Hi, I'm Owen Lennon, and I love to code!"
          title="DEV"
          linkedin="https://www.linkedin.com/in/owen-lennon-185824185/"
        ></BioCard>
        <BioCard
          profilepic={"../images/michlogo.png"}
          name="Connor Woods"
          desc="Hi, I'm Connor Woods, and I love to code!"
          title="DEV"
        ></BioCard>
        <BioCard
          profilepic={"/Team Photos/Rakesh.png"}
          name="Rakesh Kottapali"
          desc="Hi, I'm Rakesh Kottapali, and I love to code!"
          title="DEV"
          linkedin="https://www.linkedin.com/in/rakeshkottapalli"
        ></BioCard>
        <BioCard
          profilepic={
            "https://media.licdn.com/dms/image/v2/D4E03AQEkUZNvtTh7Zw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728875277326?e=1738800000&v=beta&t=coY2DiBROKImvcAc1ijoc5MUoGTvs-UoD_2sJuB801U"
          }
          name="Ali Mothana"
          desc="Hi, I'm Ali Mothana, and I love to code!"
          title="DEV"
          linkedin="https://www.linkedin.com/in/alimothana/"
        ></BioCard>
        <BioCard
          profilepic={"../images/michlogo.png"}
          name="David Nguyen"
          desc="Hi, I'm David Nguyen, and I love to code!"
          title="DEV"
          linkedin="https://www.linkedin.com/in/davidt-nguyen/"
        ></BioCard>
        <BioCard
          profilepic={
            "https://media.licdn.com/dms/image/v2/D4E03AQFkYPID-xlGRA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728691027046?e=1738800000&v=beta&t=SWTUVILW11p1fD-JtkiMOcyCBFnOURWA7eGKyQG3ocA"
          }
          name="Samuel Konigbagbe"
          desc="Hi, I'm Samuel Konigbagbe, and I love to code!"
          title="DEV"
          linkedin="https://www.linkedin.com/in/sk-real/"
        ></BioCard>
      </Box>
    </div>
  );
}
