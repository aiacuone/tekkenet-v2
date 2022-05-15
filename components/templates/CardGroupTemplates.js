import { Box, Flex, Heading, Stack as StackRaw } from "@chakra-ui/react";
import { MixUpCard, GenericCard } from "../index";
import { randomGroupColor } from "../../utils";

const Stack = ({ children, ...rest }) => {
  return (
    <StackRaw mt={5} spacing={10} {...rest}>
      {children}
    </StackRaw>
  );
};

export const CardNestingTemplate = ({ metaName, data, character }) => {
  if (!data) return null;
  //checks if the data is an object to determine whether its a group(object) or cards(array)

  const isObject = (data) => {
    return Object.prototype.toString.call(data) === "[object Object]";
  };

  function isArray(data) {
    return Array.isArray(data);
  }

  //Template for both CreateGroups and CreateCards components
  const NestTemplate = ({ heading, children }) => {
    return (
      <Flex
        w={"100%"}
        bg={randomGroupColor}
        p={10}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        direction={"column"}
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

  //Component that renders if data is an object (nested)
  const CreateGroups = ({ data, heading, href }) => {
    return (
      <>
        {Object.keys(data).map((v, i) => {
          const { id } = data[v];
          return (
            <NestTemplate heading={v} key={`nestTemplate${i}`}>
              <Stack>
                {isArray(data[v]) ? (
                  <CreateCards data={data[v]} />
                ) : isObject(data[v]) ? (
                  <CreateGroups heading={v} data={data[v]} />
                ) : null}
              </Stack>
            </NestTemplate>
          );
        })}
      </>
    );
  };

  //Renders if data is an array
  const CreateCards = ({ data, href }) => {
    return (
      <Stack>
        {data.map((v) => {
          const { id } = v;
          return (
            <GenericCard
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

  const defaultHref = `/${character}/${metaName}`;

  return (
    <NestTemplate heading={metaName}>
      {isObject(data) ? (
        <CreateGroups heading={metaName} data={data} href={defaultHref} />
      ) : isArray(data) ? (
        <CreateCards data={data} href={defaultHref} />
      ) : null}
    </NestTemplate>
  );
};
