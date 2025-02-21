import {riotKey} from "../../../secrets";

export const REQUIRED_FEATURES = [
  "gep_internal",
  "live_client_data",
  "matchState",
  "match_info",
  "death",
  "respawn",
  "abilities",
  "kill",
  "assist",
  "gold",
  "minions",
  "summoner_info",
  "gameMode",
  "teams",
  "level",
  "announcer",
  "counters",
  "damage",
  "heal",
  "jungle_camps",
  "team_frames",
  "chat",
];
export const RETRY_TIMES = 10;

// register gep events
export const REGISTER_RETRY_TIMEOUT = 10000;

//same name in the public/app/manifest.json  "windows"
export const WINDOW_NAMES = {
  BACKGROUND: "background",
  SETTINGS: "settings",
  INGAME: "in_game",
  DESKTOP: "desktop",
  NOTIFICATION: "notification",
};

export const WINDOW_TITLE: string = "RoseQuartz.GG";
export const LEAGUE_VERSION: string = "15.4.1";
export const RIOT_API_KEY: string = riotKey //Nice Try :P
export const DISPLAY_OVERWOLF_HOOKS_LOGS = true;