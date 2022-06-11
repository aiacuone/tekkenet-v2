import {Box, Text} from "@chakra-ui/react";

export function MoveCard({move}) {
    return (
        <Box>{Object.keys(move).map((v) => {
            return <Text>{move[v]}</Text>
        })}</Box>
    );
}