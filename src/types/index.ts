export type Game = {
    competitions: Competition[]
    date: string
    id: string
    links: any[]
    name: string
    season: { year: number; type: number }
    shortName: string
    uid: string
    weather: {
        displayValue: string
        highTemperature: number
        conditionId: string
    }
}

export type Competition = {
    attendance: number
    broadcasts: any[]
    competitors: Competitor[]
    conferenceCompetition: boolean
    date: string
    geoBroadcasts: any[]
    id: string
    neutralSite: boolean
    notes: any[]
    odds: any[]
    recent: boolean
    startDate: string
    status: {
        clock: number
        displayClock: string
        period: number
        type: {
            id: string
            name: string
            state: string
            completed: boolean
            description: string
            detail: string
            shortDetail: string
        }
    }
    tickets: any[]
    timeValid: boolean
    tournamentId: number
    uid: string
    venue: {
        id: string
        address: { city: string; state: string }
        capacity: number
        fullName: string
        indoor: boolean
    }
}

export type Competitor = {
    curatedRank: { current: number }
    homeAway: "home" | "away"
    leaders: any[]
    order: number
    records: any[]
    score: string
    statistics: any[]
    team: {
        id: string
        uid: string
        location: string
        name: string
        abbreviation: string
        color: string
        alternateColor: string
        conferenceId: string
        isActive: boolean
        links: any[]
        logo: string
        shortDisplayName: string
        displayName: string
    }
}
