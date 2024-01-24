import React from "react";
import { HStack, Image, VStack, Box, GridItem } from "@chakra-ui/react";

const Clients = [
  {
    getImageSrc: () => require("../Image/AESCT.png"),
  },
  {
    getImageSrc: () => require("../Image/Asset 16@4x.png"),
  },
  {
    getImageSrc: () => require("../Image/WhatsApp Image 2023-11-30 à 00.04.38_140eb8c3.jpg"),
  },
  {
    getImageSrc: () => require("../Image/Untitled design (4).png"),
  },
  {
    getImageSrc: () => require("../Image/Untitled design (1).png"),
  },
  {
    getImageSrc: () => require("../Image/Cyan Modern Innovation Technology Logo.png"),
  },
];

const Card = ({ imageSrc }) => (
  <HStack spacing={3}>
    <Box
      backgroundColor="#E6E8EB"
      textColor="#010133"
      height={200}
      paddingBottom={5}
    >
      <VStack spacing={3}>
        <Image src={imageSrc} width={"100%"} height={100} objectFit="cover" />
      </VStack>
    </Box>
  </HStack>
);

const Client = () => {
  return (
    <>
      <Box
        backgroundColor="#E6E8EB"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="h1-Service">Clients</h1>
        <Box
          borderBottom="15px solid yellow"
          borderRadius="10"
          width="100px"
          mb={4}
          ml={100}
        ></Box>
        <GridItem
          display="grid"
          gridTemplateColumns="repeat(6,minmax(0,1fr))"
          gridGap={4}
          ml={50}
          mr={50}
        >
          {Clients.map((clientelle) => (
            <Card
              key={clientelle.title}
              title={clientelle.title}
              imageSrc={clientelle.getImageSrc()}
            />
          ))}
        </GridItem>
      </Box>
    </>
  );
};

export default Client;
