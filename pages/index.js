import Head from "next/head";
import { characters } from "../utils";
import { CharacterCard } from "../components";
import { Flex, Heading, Stack } from "@chakra-ui/react";

export default function Home() {
  const buttons = characters.map((c) => {
    return <CharacterCard key={c} character={c} />;
  });
  return (
    <Flex alignItems={"center"} py={"10"} direction={"column"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading mb={"10"} as={"h5"}>
        Choose your character
      </Heading>
      <Stack spacing={5}>{buttons}</Stack>
    </Flex>
  );
}
