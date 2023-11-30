interface TeamInfo {
    name: string | null,
}

interface Result {
    homeGoals: number,
    awayGoals: number,
}

interface Event { 
    season: number,
    status: "played" | "scheduled",
    dateVenue: string,
    homeTeam: TeamInfo | null,
    awayTeam: TeamInfo | null,
    originCompetitionName: string,
    result: Result | null,
};

export type { Event };