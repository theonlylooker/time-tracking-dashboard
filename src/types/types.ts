export interface Timeframe{
    current: number,
    previous: number
}

export interface Tracking{
    title: string,
    timeframes: {
        daily: Timeframe,
        weekly: Timeframe,
        montly: Timeframe,
    }
}

export interface FetchData{
    id: number,
    name: string,
    tracking: Tracking[],
}

export interface ProfileProps{
    name: string,
    img: string,
}

export interface TrackingCardProps{
    className?: string,
    img: string,
    color: string,
}