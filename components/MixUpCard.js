import { Flex, Text } from "@chakra-ui/react";

export const MixUpCard = ({ subCategories, id, ...rest }) => {
  return (
    <Flex
      cursor={"pointer"}
      direction={"column"}
      bg={"white"}
      p={5}
      borderRadius={15}
      boxShadow={"2px 2px 2px #707070 "}
      _hover={{ bg: "gray.100" }}
      maxW={"400px"}
      {...rest}
    >
      {Object.keys(subCategories).map((subCategory) => {
        return (
          <Flex>
            <Text mr={3} fontWeight={"bold"} textTransform={"capitalize"}>
              {`${subCategory}:`}
            </Text>
            <Text>{subCategories[subCategory]}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
