import React from "react";
import { HStack, Image, VStack, Box, Grid, GridItem } from "@chakra-ui/react";
import Client from "./Client";

const Projet = [
  {
    title: "Habitat",
    getImageSrc: () => require("../Image/habitat1.jpg"),
  },
  {
    title: "Immeuble",
    getImageSrc: () => require("../Image/habitat  12.jpg"),
  },
  {
    title: "Ecole",
    getImageSrc: () => require("../Image/ecole3.jpg"),
  },
  {
    title: "Restaurant",
    getImageSrc: () => require("../Image/resto.jpg"),
  },
];



const Card = ({ title, imageSrc }) => (
  <HStack spacing={3}>
    <Box
      backgroundColor="white"
      textColor="#010133"
      height={200}
      paddingBottom={5}
    >
      <VStack spacing={3}>
        <Box mb={4} fontSize={"xl"}>
          {title}
        </Box>
        <Image
          src={imageSrc}
          alt={title}
          width={"100%"}
          height={300}
          objectFit="cover"
        />
      </VStack>
    </Box>
  </HStack>
);



const Projets = () => {
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
        <h1 className="h1-Service">Projets</h1>
        <Box
          borderBottom="15px solid yellow"
          borderRadius="10"
          width="100px"
          mb={4}
          ml={100}
        ></Box>
        <Grid templateRows="repeat(2, 1fr)" gap={0}>
          <GridItem
            rowSpan={1}
            display="grid"
            gridTemplateColumns="repeat(4,minmax(0,1fr))"
            gridGap={8}
            ml={50}
            mr={50}
          >
            {Projet.map((projets) => (
              <Card
                key={projets.title}
                title={projets.title}
                imageSrc={projets.getImageSrc()}
              />
            ))}
          </GridItem>

        </Grid>
      </div>
      <Client />
    </>
  );
};

export default Projets;
