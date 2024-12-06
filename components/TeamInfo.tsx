import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import { LinkedIn } from "@mui/icons-material";

interface TeamMemberInfo {
  name: string;
  desc: string;
  profilepic?: string;
  title?: string;
  linkedin?: string;
}

export default function BioCard({
  name,
  desc,
  linkedin,
  title,
  profilepic,
}: TeamMemberInfo) {
  return (
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar src={profilepic} sx={{ "--Avatar-size": "8rem" }} />
        <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: "3px solid",
            borderColor: "background.surface",
          }}
        >
          {title}
        </Chip>
        <Typography level="title-lg">{name}</Typography>
        <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
          {desc}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            "& > button": { borderRadius: "2rem" },
          }}
        >
          <a href={linkedin}>
            <IconButton size="sm" variant="plain" color="neutral">
              <LinkedIn />
            </IconButton>
          </a>
        </Box>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <ButtonGroup
            variant="outlined"
            sx={{ bgcolor: "background.surface" }}
          >
            <Button>Message</Button>
            <Button>Connect</Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}
