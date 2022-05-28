import { Flex, Heading, Stack as StackRaw } from "@chakra-ui/react";
import { GenericCard } from "../index";
import { groupColors } from "../../utils";
import { isArray, isObject } from "lodash";

const Stack = ({ children, ...rest }) => {
  return (
    <StackRaw mt={5} spacing={10} {...rest}>
      {children}
    </StackRaw>
  );
};

export const CardNestingTemplate = ({ metaNestName, data, character }) => {
  if (!data) return null;
  //checks if the data is an object to determine whether its a group(object) or cards(array)

  //Template for both CreateGroups and CreateCards components
  const NestTemplate = ({ heading, children, ...rest }) => {
    return (
      <Flex
        w={"100%"}
        bg={groupColors[Math.floor(Math.random() * groupColors.length)]}
        p={10}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        direction={"column"}
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

  //Component that renders if data is an object (nested)
  const CreateGroups = ({ data, heading, href }) => {
    return (
      <>
        {Object.keys(data).map((v, i) => {
          return (
            <NestTemplate heading={v} key={`CreateGroups/${v}/${i}`}>
              <Stack>
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

  const defaultHref = `/${character}/${metaNestName}`;
  return (
    <NestTemplate heading={metaNestName}>
      <Stack w={"100%"}>
        {isObject(data) ? (
          <CreateGroups heading={metaNestName} data={data} href={defaultHref} />
        ) : isArray(data) ? (
          <CreateCards data={data} href={defaultHref} />
        ) : null}
      </Stack>
    </NestTemplate>
  );
};
