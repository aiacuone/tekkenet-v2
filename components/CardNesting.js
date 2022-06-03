import { Flex, Heading, Stack } from "@chakra-ui/react";
import { groupColors } from "../utils";
import { isArray, isObject } from "lodash";
import { GenericCard } from "./GenericCard";

export const CardNesting = ({ data, character }) => {
  const NestContainer = ({ heading, children, ...rest }) => {
    return (
      <Flex
        w={"100%"}
        bg={groupColors[Math.floor(Math.random() * groupColors.length)]}
        p={10}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        direction={"column"}
        flex={1}
        {...rest}
      >
        <Heading
          size={"sm"}
          textTransform={"capitalize"}
          m={3}
          position={"absolute"}
          top={0}
          left={0}
        >
          {heading}
        </Heading>
        {children}
      </Flex>
    );
  };

  const CreateGroups = ({ data, heading, href }) => {
    return (
      <Stack spacing={5} w={"100%"}>
        {Object.keys(data).map((v, i) => {
          return (
            <NestContainer heading={v} key={`CreateGroups/${v}/${i}`}>
              <Stack spacing={5}>
                {isArray(data[v]) ? (
                  <CreateCards data={data[v]} href={href} />
                ) : isObject(data[v]) ? (
                  <CreateGroups
                    heading={v}
                    data={data[v]}
                    href={`${href}/${v}`}
                  />
                ) : null}
              </Stack>
            </NestContainer>
          );
        })}
      </Stack>
    );
  };

  //Renders if data is an array
  const CreateCards = ({ data, href }) => {
    return (
      <Stack spacing={5}>
        {data.map((v, i) => {
          const { id } = v;
          return (
            <GenericCard
              key={`CreateCards/${v}/${i}`}
              data={v}
              character={character}
              fontSize={12}
              cardWidth={"100%"}
              href={`${href}/${id}`}
            />
          );
        })}
      </Stack>
    );
  };

  return (
    <Flex w={"100%"} h={"100%"} direction={"column"}>
      <Stack flex={1} spacing={5}>
        {data.map((v) => {
          return (
            <NestContainer heading={v.name}>
              {isArray(v.data) ? (
                <CreateCards data={v.data} />
              ) : isObject(v.data) ? (
                <CreateGroups data={v.data} heading={v.name} />
              ) : null}
            </NestContainer>
          );
        })}
      </Stack>
    </Flex>
  );
};
