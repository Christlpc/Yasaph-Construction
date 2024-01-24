import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div>
      <HStack spacing={3}>
        <Box
          backgroundColor="#EDEFEE"
          textColor="black"
          height={550}
          paddingBottom={5}
        >
          <VStack spacing={3}>
            <Image
              src={imageSrc}
              alt={title}
              width={"100%"}
              height={300}
              objectFit="cover"
            />
            <Box paddingX={4}>
              <Heading paddingY={3} size="md">
                {title}
              </Heading>
              <Text>{description}</Text>
              <HStack spacing={2}>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </div>
  );
};

export default Card;
