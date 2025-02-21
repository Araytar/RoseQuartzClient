import axios from "axios";
import {userContext} from "../models/contexts";

const getMatches = (userCtx: userContext, count: number, start: number) => {
    axios({
        method: "get",
        url: `https://${userCtx.route}.api.riotgames.com/lol/match/v5/matches/by-puuid/${userCtx.playerUuid}/ids?start=${start}&count=${count}`
    });
}

const getMatchData = (userCtx: userContext, matchId: string) => {
    
}