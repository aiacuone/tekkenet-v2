import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export const MixUpCard = ({
  data,
  character,
  category,
  cardWidth,
  ...rest
}) => {
  const { id } = data;
  return (
    <Link href={`/${character}/mix-up/${category}/${id}`}>
      <Flex
        cursor={"pointer"}
        direction={"column"}
        bg={"white"}
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
