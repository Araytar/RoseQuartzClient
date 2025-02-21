export const LEAGUE_SUMMONERSRIFT = 5426;
export const LEAGUE_CLIENT = 10902;

export function getLeagueSummonersriftGame(): Promise<overwolf.games.GetRunningGameInfoResult | null> {
  return new Promise((resolve) => {
    overwolf.games.getRunningGameInfo((result) => {
      resolve(
        result && result.classId === LEAGUE_SUMMONERSRIFT ? result : null,
      );
    });
  });
}

export function getLeagueClientGame(): Promise<overwolf.games.GetRunningGameInfoResult | null> {
  return new Promise((resolve) => {
    overwolf.games.getRunningGameInfo((result) => {
      resolve(
        result && result.classId === LEAGUE_CLIENT ? result : null,
      );
    });
  });
}

export function getGameInfo(): Promise<any> {
  return new Promise((resolve, reject) => {
    overwolf.games.events.getInfo((info) => {
      if (info.success) {
        resolve(info.res);
      } else {
        reject(info);
      }
    });
  });
}
