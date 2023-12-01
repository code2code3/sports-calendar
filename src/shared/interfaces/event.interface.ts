interface TeamInfo {
    name: string | null,
}

interface Result {
    homeGoals: number,
    awayGoals: number,
}

type Event = { 
    season: number,
    status: string,
    dateVenue: string,
    timeVenueUTC: string,
    homeTeam: TeamInfo | null,
    awayTeam: TeamInfo | null,
    originCompetitionName: string,
    result: Result | null,
};

export type { Event };