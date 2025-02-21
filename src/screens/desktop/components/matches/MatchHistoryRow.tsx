import {matchContext, userContext} from "../../../../features/shared";
import { Card, Text, Avatar, Group, Progress, Badge } from '@mantine/core';
import { motion } from "framer-motion";
import {LEAGUE_VERSION} from "app/shared/constants"

interface MatchHistoryRowProperties {
    userCtx: userContext
    matchCtx: matchContext
}

const MatchHistoryRow = ({userCtx}: MatchHistoryRowProperties) => {

    return (
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Card shadow="sm" padding="lg" withBorder style={{ width: 200, cursor: "pointer"}}>
                <Avatar src={`https://ddragon.leagueoflegends.com/cdn/${LEAGUE_VERSION}/img/profileicon/${userCtx.iconId}.png`}
                    radius="xl"
                    size="lg"
                    mx="auto"
                />
                <Text align="center" weight={500} mt="sm">{}</Text>
                <Text align="center" size="xs" color="dimmed">{role}</Text>
                <Badge color={result === 'win' ? 'green' : 'red'} fullWidth mt="sm">{result.toUpperCase()}</Badge>
                <Progress value={score} mt="md" size="lg" radius="xl" label={`${score}`} />
            </Card>
        </motion.div>
    );
}