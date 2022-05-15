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

export const DualNestedCardTemplate = ({ heading, bg0, data, character }) => {
  return (
    <Box bg={bg0} px={10} py={6} position={"relative"}>
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
      <Stack>
        {data &&
          Object.keys(data).map((group) => {
            return (
              <Flex
                bg={randomGroupColor}
                p={10}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
              >
                <Heading
                  size={"sm"}
                  textTransform={"capitalize"}
                  m={3}
                  position={"absolute"}
                  top={0}
                  left={0}
                >
                  {group}
                </Heading>
                <Stack spacing={5}>
                  {data[group].map((cardData) => {
                    return (
                      <MixUpCard
                        data={cardData}
                        character={character}
                        category={group}
                        fontSize={12}
                        cardWidth={"100%"}
                      />
                    );
                  })}
                </Stack>
              </Flex>
            );
          })}
      </Stack>
    </Box>
  );
};

export const CardNestingTemplate = ({ metaName, data, character }) => {
  //checks if the data is an object to determine whether its a group(object) or cards(array)
  function isDataObject(data) {
    return typeof data === "object";
  }

  function isDataArray(data) {
    return typeof data === "array";
  }

  //Template for both CreateGroups and CreateCards components
  const NestTemplate = ({ heading, children }) => {
    return (
      <Flex
        bg={randomGroupColor}
        p={10}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
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
  const CreateGroups = ({ dataObj, heading, href }) => {
    return (
      <>
        {dataObj &&
          Object.keys(dataObj).map((v) => {
            return (
              <NestTemplate heading={heading}>
                <Stack>
                  {isDataObject(dataObj[v]) ? (
                    <CreateGroups
                      heading={v}
                      data={dataObj[v]}
                      href={`${href}/[${v}]`}
                    />
                  ) : (
                    <CreateCards
                      heading={v}
                      data={dataObj[v]}
                      href={`${href}/[${v}]`}
                    />
                  )}
                </Stack>
              </NestTemplate>
            );
          })}
      </>
    );
  };

  //Renders if data is an array
  const CreateCards = ({ dataArr, heading, href }) => {
    return (
      <NestTemplate heading={heading}>
        <Stack>
          {dataArr &&
            dataArr.map((v) => {
              const { id } = v;
              return (
                <GenericCard
                  data={v}
                  character={character}
                  category={v}
                  fontSize={12}
                  cardWidth={"100%"}
                  href={`${href}/[${id}]`}
                />
              );
            })}
        </Stack>
      </NestTemplate>
    );
  };

  const defaultHref = `/${character}/[${metaName}]`;

  return (
    <Box>
      {isDataObject(data) ? (
        <CreateGroups heading={metaName} data={data} href={defaultHref} />
      ) : isDataArray(data) ? (
        <CreateCards heading={metaName} data={data} href={defaultHref} />
      ) : null}
    </Box>
  );
};
