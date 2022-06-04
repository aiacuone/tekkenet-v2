import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export const GenericCard = ({
  data,
  category,
  cardWidth,
  href,
  bg = "white",
  ...rest
}) => {
  return (
    <Link href={`/card/${data["uuid"]}`} {...rest}>
      <Flex
        cursor={"pointer"}
        direction={"column"}
        bg={bg}
        p={5}
        borderRadius={15}
        boxShadow={"2px 2px 2px #707070 "}
        _hover={{ bg: "gray.100" }}
        w={cardWidth}
      >
        {Object.keys(data).map((v, i) => {
          return (
            <Flex key={`GenericCardData/${v}/${i}`}>
              <Text mr={3} fontWeight={"bold"} textTransform={"capitalize"}>
                {`${v}:`}
              </Text>
              <Text>{data[v]}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Link>
  );
};
