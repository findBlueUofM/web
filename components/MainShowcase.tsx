import * as React from "react";
import { Box, Typography,Card, CardMedia, CardContent} from "@mui/material";
// import PeopleIcon from "@mui/icons-material/People";

export default function NetworkBuildRepeatSection() {
  const items = [
    {
      image: "fallstock.jpg",
      title: "Connor's Burger Bar",
      description: "He makes burgers",
      link: "link1.html",
    },
    {
      image: "leaves.jpeg",
      title: "David's Microchip Company",
      description: "They make microchips",
      link: "link2.html",
    },
    {
      image: "BBB.jpg",
      title: "Sam's Soup",
      description: "They make advanced rocket tech",
      link: "link3.html",
    },
    {
      image: "michigan_sign_fixed.jpg",
      title: "Pravesh",
      description: "Pravesh",
      link: "link4.html",
    },
  ];

  return (
    <Box component="section" sx={{ padding: 4, textAlign: "center" }}>
      {/* Cards Container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 500,
              boxShadow: 4,
              borderRadius: 2,
              "&:hover": { boxShadow: 6 },
            }}
          >
            {/* Card Media */}
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ height: 160 }}
            />
            {/* Card Content */}
            <CardContent>
              <Typography variant="h6" component="div" fontWeight="bold" fontFamily={'Inter'}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily={'Inter'}>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
