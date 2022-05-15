import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export const GenericCard = ({
  data,
  character,
  category,
  cardWidth,
  href,
  bg = "white",
  ...rest
}) => {
  const { id } = data;
  return (
    <Link href={href}>
      <Flex
        cursor={"pointer"}
        direction={"column"}
        bg={bg}
        p={5}
        borderRadius={15}
        boxShadow={"2px 2px 2px #707070 "}
        _hover={{ bg: "gray.100" }}
        w={cardWidth}
        {...rest}
      >
        {Object.keys(data).map((v) => {
          return (
            <Flex>
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
