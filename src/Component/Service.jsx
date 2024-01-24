import React from "react";
import Card from "./Card";
import { Box } from "@chakra-ui/react";

const plats = [
  {
    title: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    getImageSrc: () => require("../Image/construction-site-1359136_1280.jpg"),
  },
  {
    title: "Bruchetta  ",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    getImageSrc: () => require("../Image/works-3480187_1920.jpg"),
  },
  {
    title: "Lemon cake",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../Image/grues-dans-chantier-construction.jpg"),
  },
];

const Service = () => {
  return (
    <>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="h1-Service">Services</h1>
        <Box
          borderBottom="15px solid yellow"
          borderRadius="10"
          width="100px"
          mb={4}
          ml={100}
        ></Box>
      </div>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
        ml={50}
        mr={50}
      >
        {plats.map((plat) => (
          <Card
            key={plat.title}
            title={plat.title}
            description={plat.description}
            imageSrc={plat.getImageSrc()}
          />
        ))}
      </Box>
    </>
  );
};

export default Service;
