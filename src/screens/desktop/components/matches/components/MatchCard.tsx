import {matchContext, userContext} from "../../../../../features/shared";
import {Button, Paper, Text, Title} from "@mantine/core";

interface MatchCardPropterties {
    userCtx: userContext
    matchCtx?: matchContext
}

export const MatchCard = ({userCtx}: MatchCardPropterties) => {
    return (
        <Paper shadow="md" p="xl" radius="md">
            <div>
                <Text size="xs">Test</Text>
                <Title order={3}>Title</Title>
            </div>
            <Button variant="white" color="dark">
                Button
            </Button>
        </Paper>
    )
}