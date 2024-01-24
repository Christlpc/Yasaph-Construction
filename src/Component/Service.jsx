import React from "react";
import Card from "./Card";
import { Box } from "@chakra-ui/react";

const plats = [
  {
    title: "Génie civil",
    description:
      "Englobe la construction d'infrastructures publiques telles que routes, ponts, tunnels, pistes d'aéroport, etc. Inclut des travaux de terrassement, nivellement de terrain, excavation et préparation de site.",
    getImageSrc: () => require("../Image/construction-site-1359136_1280.jpg"),
  },
  {
    title: "Architecture  ",
    description:
      "Service de conception créative des plans et des schémas architecturaux pour les nouvelles constructions ou les projets de rénovation. Il inclut la supervision et de coordination de l'ensemble du processus, depuis la conception initiale jusqu'à la réalisation physique du projet.",
    getImageSrc: () => require("../Image/works-3480187_1920.jpg"),
  },
  {
    title: "Construction et rénovation",
    description:
      "Service consistant en la construction de nouveaux bâtiments, qu'il s'agisse de résidences, d'immeubles commerciaux ou industriels. Englobe la rénovation de structures pour les adapter aux normes actuelles, ainsi que la restauration de bâtiments historiques. ",

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
