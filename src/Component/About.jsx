import React from "react";
import image1 from "../Image/villa.jpg";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Grid
        h="750px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={0}
      >
        <GridItem colSpan={1}>
          <div style={{ height: "100%"}}>
            <h1 className="About-h1">A propos</h1>
            <Box
              borderBottom="15px solid yellow"
              borderRadius="10"
              width="100px"
              ml={10}
              mb={4}
            ></Box>
            <Text  className="About-p">
              {" "}
              Notre société, Yasaph Construction, est un pilier dans l'industrie
              du Bâtiment et des Travaux Publics depuis sa fondation en 2020.
              Forts de notre engagement envers l'excellence et la qualité, nous
              nous spécialisons dans la réalisation de projets de construction
              d'envergure, de rénovations innovantes et de la création
              d'infrastructures durables. Notre équipe hautement qualifiée et
              notre approche méticuleuse garantissent des résultats
              exceptionnels pour nos clients. Chez Yasaph Construction, nous
              nous efforçons de dépasser les attentes, en mettant l'accent sur
              la collaboration étroite avec nos clients, tout en respectant les
              normes de sécurité et d'environnement les plus strictes.
            </Text>
            </div>
        </GridItem>

        <GridItem colSpan={1}>
          <div style={{ backgroundColor: "lightgreen", height: "100%" }}>
            <img src={image1} alt="villa" className="AboutImage"></img>
          </div>
        </GridItem>

        <GridItem rowSpan={1} colSpan={2}>
          <div style={{ backgroundColor: "Yellow", height: "100%" }}></div>
        </GridItem>
      </Grid>
    </>
  );
};

export default About;
