import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { useRouter } from "next/navigation";

export default function CreateButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/projects/submit");
  };
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        fontFamily: "Inter",
        backgroundColor: "black",
        color: "white",
        "&:hover": {
          backgroundColor: "darkgray",
        },
        padding: "10px 20px",
        marginTop: "10px",
        textTransform: "none",
      }}
    >
      Create a post &nbsp;
      <CreateIcon />
    </Button>
  );
}
